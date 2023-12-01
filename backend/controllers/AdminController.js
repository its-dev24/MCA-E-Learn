//Admin Login
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const AdminLogin = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash("Elearn@123", salt);
  console.log(pass);
};

module.exports = { AdminLogin };
