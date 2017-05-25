const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const productSchema = new Schema({
  name: { type: String, required: true },
  sku: {type : String},
  category: {type: String, required: true},
  parentCategories: {type: Array},
  tags: {type: Array},
  createdAt: {type: Date},
  updatedAt: {type: Date},

  details: {
    star: {type: Number},
    slogan: {type: String},
    description: {type: String},
    status: {type: String},
    inStock: {type: Number},
    guarantee: {type: Number},
    manufacturer: {
      manuName: {type: String},
      serialNumber: {type: String},
      location: {type: String}
    },
    price: {
      actual: {type: Number},
      sale: {type: Number},
      saleEndDate: {type: Date}
    }
  },

  specs: [
    {
      key: {type: String},
      value: {type: String}
    }
  ],
  imgs: [
    {
      src: {type: String},
      title: {type: String},
      width: {type: Number},
      height: {type: Number}
    }
  ],
  reviews: [
    {
      author: {type: String},
      comment: {type: String},
      star: {type: Number},
      atDate: {type: Date}
    }
  ],

  user: { type: Schema.Types.ObjectId, ref: "User" }
});

productSchema.post("remove", function(product) {
  User.findById(product.user, function(err, user) {
    user.manager.products.pull(product);
    user.save();
  })
});

module.exports = mongoose.model("Product", productSchema);


/*
 https://dzone.com/articles/product-catalog-part-1-schema

 type: {type: String, required: true},
 size: {type: String},
 color: {type: String},
 length: {type: Number},
 material: {type: String}



 */
