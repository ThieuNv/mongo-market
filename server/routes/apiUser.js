const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


// Helper method
handleError = function(res, code, title, err) {
  return res.status(code).json({
    title: title,
    error: err
  });
};

sendResult = function(res, code, title, result) {
  res.status(code).json({
    message: title,
    obj: result
  });
};

// localhost:3000/apiUser
router.post("/", function(req, res, next) {

  var user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    birthday: new Date(req.body.birthday),
    createdAt: new Date(),
    targetAccount: "customer"
  });
  user.save(function(err, result) {
    if(err)
      return handleError(res, 500, "An error occurred", err);

    console.log(result);
    sendResult(res, 201, "User created", result);
  });
});


// localhost:3000/apiUser/signin
router.post("/signin", function(req, res, next) {

  User.findOne({email: req.body.email}, {password: 1, targetAccount: 1, fullName: 1}, function(err, user) {
    if(err)
      return handleError(res, 500, "An error occurred", err);
    if(!user)
      return handleError(res, 401, "Signin Failed", { message: "Invalid login credentials"});

    if(!bcrypt.compareSync(req.body.password, user.password))
      return handleError(res, 401, "Signin Failed", { message: "Invalid login credentials"});

    const token = jwt.sign({user: {_id: user._id, targetAccount: user.targetAccount}}, 'secret', {expiresIn : 7200});

    res.status(200).json({
      message: "Successfully logged in",
      token: token,
      userId: user._id,
      targetAccount: user.targetAccount,
      fullName: user.fullName
    })
  });
});


router.use("/", function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if(err)
      return handleError(res, 401, "Not Authenticated", err);
    next();
  })
});

// localhost:3000/apiUser/data
router.get("/data", function(req, res, next) {
  const decoded = jwt.decode(req.query.token);
  var query = {};
  if(decoded.user.targetAccount.indexOf("customer") === -1) {
    query = { customer: 0 }
  } else if(decoded.user.targetAccount.indexOf("manager") === -1) {
    query = { manager: 0 }
  }
  User.findById(decoded.user._id, query, function(err, user) {
    if(err)
      return handleError(res, 500, 'An error occured', err);
    if(!user)
      return handleError(res, 401, "No information about user found!", { message: "Found nothing!"});

    sendResult(res, 200, "Get data successfully!", user);
  })
});


// localhost:3000/apiUser/update/account/profile/:id
// localhost:3000/apiUser/update/customer/contact/:id
// localhost:3000/apiUser/update/manager/detail/:id
// localhost:3000/apiUser/admin/delete/account/:id
// localhost:3000/apiUser/root/up-role/account/:id

router.patch("/update/account/profile/:id", function(req, res, next) {
  User.findById(req.params.id, {fullName: 1, password: 1, birthday: 1}, function(err, user) {
    if(err)
      return handleError(res, 500, 'An error occured', err);
    if(!user)
      return handleError(res, 500, 'No User Found', {message: 'User not found'} );
    if(!bcrypt.compareSync(req.body.oldPassword, user.password))
      return handleError(res, 401, "Old password wrong!", {message: "Invalid password!"} );

    user.fullName = req.body.fullName;
    user.password = bcrypt.hashSync(req.body.password, 10);
    user.birthday = new Date(req.body.birthday);

    user.save(function(err, result) {
      if(err)
        return handleError(res, 500, 'An error occured', err);

      sendResult(res, 201, 'Saved user', result);
    });
  })
});

// Customer
router.patch("/update/customer/contact/:id", function(req, res, next) {
  User.findByIdAndUpdate(req.params.id,
    {
      $push: {
        "customer.deliverAddress" : req.body.deliverAddress,
        "customer.paymentAddress" : req.body.paymentAddress,
        "customer.phoneNumber" : req.body.phoneNumber
      }
    },
    {new: true, upsert: true},
    function (err, user) {
      if(err)
        return handleError(res, 500, 'An error occured', err);
      sendResult(res, 201, 'Update user successful!', user);
  });
});

// Manager
router.patch("/update/manager/detail/:id", function(req, res, next) {
  User.findByIdAndUpdate(req.params.id,
    {
      $set: {
        "manager.username": req.body.username,
        "manager.gender": req.body.gender,
        "manager.about": req.body.about,
        "manager.socialMedia.facebook": req.body.facebook ? req.body.facebook: '',
        "manager.socialMedia.twitter": req.body.twitter ? req.body.twitter: '',
        "manager.socialMedia.google": req.body.google ? req.body.google: ''
      },
      $push: {
        "manager.messages" : req.body.message
      }
    },
    {new: true, upsert: true},
    function (err, user) {
      if(err)
        return handleError(res, 500, 'An error occured', err);
      sendResult(res, 201, 'Update user successful!', user);
    });
});


// localhost:3000/apiUser/admin/delete/account/:id
router.delete("/admin/delete/account/:id", function(req, res, next) {
  const decoded = jwt.decode(req.query.token);

  User.findById(decoded.user._id, function(err, user) {
    if(err)
      return handleError(res, 500, 'An error occured', err);
    if(!user)
      return handleError(res, 500, 'No user Found', { message: 'User not found'});
    if(user.manager.role.indexOf("admin") === -1 && user.manager.role.indexOf("root") === -1)
      return handleError(res, 401, "Wrong permission!", { message: "You don't have the right permission to do that."});
    User.findById(req.params.id, function(err, myUser) {
      if(err)
        return handleError(res, 500, 'An error occured', err);
      if(!myUser)
        return handleError(res, 500, 'No user Found', { message: 'User not found'});
      if(myUser.manager.role.indexOf("admin") !== -1 || myUser.manager.role.indexOf("root") !== -1)
        return handleError(res, 401, "Wrong permission!", { message: "You don't have the right permission to do that."});

      myUser.remove(function(err, result) {
        if(err)
          return handleError(res, 500, 'An error occured', err);
        sendResult(res, 201, "Deleted user successful", result);
      });
    });
  })
});


// localhost:3000/apiUser/root/up-role/account/:id
router.patch("/root/up-role/account/:id", function(req, res, next) {
  const decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if(err)
      return handleError(res, 500, 'An error occured', err);
    if(!user)
      return handleError(res, 500, 'No user Found', { message: 'User not found'});
    if(user.manager.role.indexOf("root") === -1)
      return handleError(res, 401, "Wrong permission!", { message: "You don't have the right permission to do that."});

    User.findByIdAndUpdate(req.params.id,
      {
        $push: {
          "manager.role" : req.body.role
        }
      },
      {new: true, upsert: true},
      function (err, user) {
        if(err)
          return handleError(res, 500, 'An error occured', err);
        sendResult(res, 201, 'Update user successful!', user);
      });
  })
});


// delete
// localhost:3000/message/:id
/*router.delete("/:id", function(req, res, next) {

  var decoded = jwt.decode(req.query.token);


  Message.findById(req.params.id, function(err, message) {
    if(err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!message) {
      return res.status(500).json({
        title: 'No Message Found',
        error: {
          message: 'Message not found'
        }
      });
    }

    // check if this message was created by this user or not
    if(message.user != decoded.user._id) {
      return res.status(401).json({
        title: "Not Authenticated",
        error: {message: "User do not match"}
      });
    }

    message.remove(function(err, result) {
      if(err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Deleted message',
        obj: result
      })
    });
  })
});*/

module.exports = router;
