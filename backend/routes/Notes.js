const express = require(`express`);
const Notesrouter = express.Router();

//View all notes of a Semester
Notesrouter.get(
  "/:semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes",
  (req, res) => {
    console.log("Notes");
  }
);

//Insert notes

Notesrouter.post(
  "/:semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes",
  (req, res) => {
    console.log(res.json({ msg: "Insert a note" }));
  }
);

//Delete a note

Notesrouter.delete(
  ":semesterNumber/subjects/:subjectName/modules/:moduleNumber/notes/:id",
  (req, res) => {
    console.log(res.json({ msg: "Delete a note" }));
  }
);
