const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//Login user

AdminSchema.statics.login = function (email, password) {
  if (!email || !password) {
    throw Error("Either Field is empty!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Not a Valid Email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Not a Strong password try adding Numbers|uppercase|special characters"
    );
  }
};

module.exports = mongoose.model("admin", AdminSchema);
