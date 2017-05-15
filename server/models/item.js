const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  slogan: {type: String, required: true},
  description: {type: String, required: true},
  stars: {type: Number},
  categories: {type: Array, required: true},
  imgUrls: {type: Array, required: true},
  priceSale: {type: Number},
  priceActual: {type: Number},
  inStock: {type: Number},
  tags: {type: Array},
  reviews: [
    {
      name: {type: String},
      comment: {type: String},
      stars: {type: Number},
      date: {type: Date}
    }
  ],
  details: {
    manufacturer: {type: String},
    serialNumber: {type: String},
    size: {type: String},
    color: {type: String},
    guarantee: {type: String}
  },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Item", itemSchema);

