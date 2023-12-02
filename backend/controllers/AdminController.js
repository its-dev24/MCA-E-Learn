//Admin Login
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const User = require("../models/AdminModel");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const AdminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
  //   const salt = await bcrypt.genSalt(10);
  //   const pass = await bcrypt.hash("Elearn@123", salt);
  //   console.log(pass);
};

module.exports = { AdminLogin };
