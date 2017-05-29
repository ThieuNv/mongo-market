const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Product = require("../models/product");


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

// localhost:3000/apiProduct/all
router.get("/all", function(req, res, next) {
  Product.find()
    .populate('user')
    .exec(function(err, products) {
      if(err)
        return handleError(res, 500, "An error occurred", err);
      if(!products)
        return handleError(res, 404, "No product found", { message: "Found nothing!"});
      sendResult(res, 200, "Get data successfully!", products);
    })
});


// Check every request of api will have jwt
router.use("/", function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if(err)
      return handleError(res, 401, "Not Authenticated", err);
    next();
  })
});


// localhost:3000/apiProduct/all
// localhost:3000/apiProduct/create
// localhost:3000/apiProduct/update/:id
// localhost:3000/apiProduct/delete/:id




// localhost:3000/apiProduct/create
router.post("/create", function(req, res, next) {
  const bodyData = req.body;
  const decoded = jwt.decode(req.query.token);

  User.findById(decoded.user._id, function(err, user) {
    if(err)
      return handleError(res, 500, "An error occurred", err);
    if(!user) {
      return handleError(res, 404, "No user found", {message: "User not found!"});
    }

    const product = new Product({
      name: bodyData.name,
      sku: bodyData.sku,
      category: bodyData.category,
      parentCategories: null,
      tags: bodyData.tags,
      createdAt: new Date(),
      updatedAt: new Date(),
      details: {
        star: bodyData.details.star,
        slogan: bodyData.details.slogan,
        description: bodyData.details.description,
        status: bodyData.details.status,
        inStock: bodyData.details.inStock,
        guarantee: Number(bodyData.details.guarantee),

        manufacturer: {
          manuName: bodyData.details.manufacturer.manuName,
          serialNumber: bodyData.details.manufacturer.serialNumber,
          location: bodyData.details.manufacturer.location
        },
        price: {
          actual: Number(bodyData.details.price.actual),
          sale: Number(bodyData.details.price.sale),
          saleEndDate: new Date(bodyData.details.price.saleEndDate)
        }
      },
      user: user
    });

    product.save(function(err, result) {
      if(err)
        return handleError(res, 500, "An error occurred", err);

      user.manager.products.push(result);
      user.save(function (err) {
        if (err)
          return handleError(res, 401, "Saving user error!", err);

        sendResult(res, 201, "Product created", result);
      });
    });
  });
});


// localhost:3000/apiProduct/update/:id
router.patch("/update/:id", function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if(err) {
      return handleError(res, 500, "An error occurred", err);
    }
    if(!product) {
      return handleError(res, 404, "No product found", {message: "Product not found!"});
    }
    const bodyData = req.body;
    console.log(bodyData);
    product.name = bodyData.name;
    product.sku = bodyData.sku;
    product.category = bodyData.category;
    product.tags = bodyData.tags;
    product.updatedAt = new Date();
    product.details.slogan = bodyData.details.slogan;
    product.details.description = bodyData.details.description;
    product.details.status = bodyData.details.status;
    product.details.inStock = bodyData.details.inStock;
    product.details.guarantee = Number(bodyData.details.guarantee);
    product.details.manufacturer = bodyData.details.manufacturer;
    product.details.price.actual = Number(bodyData.details.price.actual);
    product.details.price.sale =  Number(bodyData.details.price.sale);
    product.details.price.saleEndDate = new Date(bodyData.details.price.saleEndDate);
  console.log(product);
    product.save(function(err, result) {
      if(err) {
        return handleError(res, 500, "An error occurred", err);
      }
      sendResult(res, 200, "Updated Product", result);
    })
  });
});

// localhost:3000/apiProduct/delete/:id
router.delete("/delete/:id", function(req, res, next) {
  const decoded = jwt.decode(req.query.token);
  Product.findById(req.params.id, function(err, product) {
    if(err)
      return handleError(res, 500, "An error occurred", err);
    if(!product) {
      return handleError(res, 404, "No product found", {message: "Product not found!"});
    }
    product.remove(function(err, result) {
      if(err)
        return handleError(res, 500, "An error occurred", err);
      sendResult(res, 200, "Product created", result);
    });
  });
});


module.exports = router;
