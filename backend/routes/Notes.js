const express = require(`express`);
const Notesrouter = express.Router();

const { createNote } = require(`../controllers/NotesController`);

//View all notes of a Semester
Notesrouter.get("/", (req, res) => {
  res.json({ msg: "Notes" });
});

//Insert notes

Notesrouter.post("/", createNote);

//Delete a note

Notesrouter.delete(
  ":semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes/:id",
  (req, res) => {
    console.log(res.json({ msg: "Delete a note" }));
  }
);

module.exports = Notesrouter;
