const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const NotesSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  Semester: {
    type: Number,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Module: {
    type: String,
    required: true,
  },
  File: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", notesSchema);
