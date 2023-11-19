const express = require(`express`);
const SemesterRouter = express.Router();

//View all notes of a Semester
SemesterRouter.get("/", (req, res) => {
  console.log(res.json({ msg: "View all Semesters" }));
});
