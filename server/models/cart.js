const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  items: [
    {
      itemId: {type: Schema.Types.ObjectId, ref: "Item"},
      quantity: {type: Number}
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);

