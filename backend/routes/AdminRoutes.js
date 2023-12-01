//Login
const express = require("express");
const { AdminLogin } = require(`../controllers/AdminController`);
const router = express.Router();

router.post("/Login", AdminLogin);

module.exports = router;
