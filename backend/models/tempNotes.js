const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const TempNotesSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  module: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Temp-Note", TempNotesSchema);
