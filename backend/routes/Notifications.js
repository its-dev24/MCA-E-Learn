const express = require(`express`);

const NotificationRouter = express.Router();
const {
  addNotifications,
  getAllNotifications,
  deleteNotification,
} = require(`../controllers/NotificationController`);

//Import model

//Get all notifications

NotificationRouter.get("/", getAllNotifications);

//Add NOtifications

NotificationRouter.post("/", addNotifications);

//delete notifications

NotificationRouter.delete("/:id", deleteNotification);

module.exports = NotificationRouter;
