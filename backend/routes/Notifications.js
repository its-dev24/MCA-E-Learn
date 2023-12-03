const express = require(`express`);
const multer = require("multer");

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./notifications/");
  },
  filename: (req, file, cb) => {
    return cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

const NotificationRouter = express.Router();
const {
  addNotifications,
  getAllNotifications,
  deleteNotification,
} = require(`../controllers/NotificationController`);

//Import model

//Get all notifications

NotificationRouter.get("/Notifications", getAllNotifications);

//Add NOtifications

NotificationRouter.post(
  "/Notifications",
  upload.single("body"),
  addNotifications
);

//delete notifications

NotificationRouter.delete("/Notifications/:id", deleteNotification);

module.exports = NotificationRouter;
