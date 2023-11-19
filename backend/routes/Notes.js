const express = require(`express`);
const Notesrouter = express.Router();

const Note = require(`../models/notesModel`);

//View all notes of a Semester
Notesrouter.get(
  "/:semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes",
  (req, res) => {
    console.log("Notes");
  }
);

//Insert notes

Notesrouter.post("/", async (req, res) => {
  const { title, semester, subject, module, file } = req.body;

  try {
    const note = await Note.create({ title, semester, subject, module, file });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }

  console.log(res.json({ msg: "Insert a note" }));
});

//Delete a note

Notesrouter.delete(
  ":semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes/:id",
  (req, res) => {
    console.log(res.json({ msg: "Delete a note" }));
  }
);

module.exports = Notesrouter;
