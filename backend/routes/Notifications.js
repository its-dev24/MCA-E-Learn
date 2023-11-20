const express = require(`express`);

const NotificationRouter = express.Router();
const {
  addNotifications,
  getAllNotifications,
} = require(`../controllers/NotificationController`);

//Import model

//Get all notifications

NotificationRouter.get("/", getAllNotifications);

//Add NOtifications

NotificationRouter.post("/", addNotifications);

//delete notifications

module.exports = NotificationRouter;
