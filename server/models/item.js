const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  categories: {type: Array, required: true},
  tags: {type: Array},
  createdAt: {type: Date},
  updatedAt: {type: Date},

  details: {
    sku: {type : String},
    star: {type: Number},
    slogan: {type: String},
    description: {type: String},
    manufacturer: {
      name: {type: String},
      serialNumber: {type: String},
      location: {type: String}
    },
    price: {
      actual: {type: Number},
      sale: {type: Number},
      saleEndDate: {type: Date}
    },
    status: {type: String},
    inStock: {type: Number},
    guarantee: {type: String}
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
      name: {type: String},
      comment: {type: String},
      star: {type: Number},
      atDate: {type: Date}
    }
  ],

  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Item", itemSchema);


/*
 https://dzone.com/articles/product-catalog-part-1-schema

 type: {type: String, required: true},
 size: {type: String},
 color: {type: String},
 length: {type: Number},
 material: {type: String}



 */
