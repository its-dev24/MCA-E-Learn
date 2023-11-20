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
  const { title, snippet, body } = req.body;
  try {
    const note = await Notification.create({ title, snippet, body });
    res.status(200).json(note);
  } catch (err) {
    res.json(err);
  }
};

//Delete notifications

module.exports = { addNotifications, getAllNotifications };
