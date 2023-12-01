const mongoose = require("mongoose");

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

module.exports = mongoose.model("admin", AdminSchema);
