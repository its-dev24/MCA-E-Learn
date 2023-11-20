const express = require(`express`);
const app = express();
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

module.exports = NotificationRouter;
