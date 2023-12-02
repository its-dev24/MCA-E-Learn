const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
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

AdminSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("Either Field is empty!");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("Incorrect Email");
  }
  const match = bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

module.exports = mongoose.model("admin", AdminSchema);
