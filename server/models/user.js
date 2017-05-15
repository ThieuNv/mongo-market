const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValid = require("mongoose-unique-validator");

const userSchema = new Schema({
  fullName: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type:String, required: true },
  birthday: { type: Date},
  createdAt: {type: Date},
  targetAccount: {type: Array},
  customer: {
    deliverAddress: {type: Array},
    paymentAddress: {type: Array},
    phoneNumber: {type: Array},
    orders: [
      {
        cart: {type: Schema.Types.ObjectId, ref: "Cart"},
        done: {type: Boolean}
      }
    ]
  },
  manager: {
    username: {type: String},
    gender: {type: String},
    role: {type: Array},
    about: {type: String},
    socialMedia: {
      facebook: {type: String},
      twitter: {type: String},
      google: {type: String}
    },
    messages: {type: Array}
  }
});

userSchema.plugin(mongooseUniqueValid);

module.exports = mongoose.model("User", userSchema);

