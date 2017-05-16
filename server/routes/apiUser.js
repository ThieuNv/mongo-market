const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

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
    if(err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    console.log(result);
    res.status(201).json({
      message: "User created",
      obj: result
    });
  });
});


// localhost:3000/apiUser/signin
router.post("/signin", function(req, res, next) {

  User.findOne({email: req.body.email}, {password: 1, targetAccount: 1, fullName: 1}, function(err, user) {
    if(err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if(!user) {
      return res.status(401).json({
        title: "Signin Failed",
        error: {
          message: "Invalid login credentials"
        }
      });
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: "Signin Failed",
        error: {
          message: "Invalid login credentials"
        }
      });
    }
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
    if(err) {
      return res.status(401).json({
        title: "Not Authenticated",
        error: err
      })
    }
    next();
  })
});

// localhost:3000/apiUser/data
router.get("/data", function(req, res, next) {
  const decoded = jwt.decode(req.query.token);
  var query = {};
  if(decoded.user.targetAccount.indexOf("customer") === -1) {
    query = {
      customer: 0
    }
  } else if(decoded.user.targetAccount.indexOf("manager") === -1) {
    query = {
      manager: 0
    }
  }
  User.findById(decoded.user._id, query, function(err, user) {
    if(err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if(!user) {
      return res.status(401).json({
        title: "No information about user found!",
        error: {
          message: "Found nothing!"
        }
      });
    }
    res.status(200).json({
      message: "Get data successfully!",
      obj: user
    })
  })
});

module.exports = router;
