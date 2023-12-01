//Admin Login
const bcrypt = require(`bcrypt`);

const AdminLogin = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash("Elearn@123", salt);
  console.log(pass);
};

module.exports = { AdminLogin };
