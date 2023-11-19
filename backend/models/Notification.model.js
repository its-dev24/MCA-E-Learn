const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: true,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
