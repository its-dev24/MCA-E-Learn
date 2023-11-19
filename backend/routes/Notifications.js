const express = require(`express`);
const app = express();
const NotificationRouter = express.Router();

//Import model

const Notification = require(`../models/notificationModel`);

NotificationRouter.post("/", async (req, res) => {
  const { title, snippet, body } = req.body;
  try {
    const note = await Notification.create({ title, snippet, body });
    res.status(200).json(note);
  } catch (err) {
    res.json(err);
  }
});

module.exports = NotificationRouter;
