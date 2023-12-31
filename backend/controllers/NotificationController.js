const { mongoose } = require("mongoose");
const Notification = require(`../models/notificationModel`);

//get all notifications

const getAllNotifications = async (req, res) => {
  const notifications = await Notification.find({});
  if (!notifications) {
    return res.status(404).res({ error: "No notifications found" });
  }
  res.status(200).json(notifications);
};

//post notifications

const addNotifications = async (req, res) => {
  const { title, snippet } = req.body;
  console.log(req.file.originalname);
  const body = req.file.originalname;
  console.log(`body${body}`);
  console.log(title);
  console.log(snippet);
  try {
    const notification = await Notification.create({ title, snippet, body });

    res.status(200).json(notification);
  } catch (err) {
    res.json(err);
  }
};

//Delete notifications

const deleteNotification = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not a valid ID" });
  }
  const notification = await Notification.findOneAndDelete({ _id: id });
  if (!notification) {
    return res.status(404).json({ error: "no notification exist" });
  }
  res.status(200).json(notification);
};

module.exports = { addNotifications, getAllNotifications, deleteNotification };
