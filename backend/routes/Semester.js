const express = require(`express`);
const app = express();

const SemesterRouter = express.Router();
const subjectRouter = require(`./Subject`);

//View all notes of a Semester
SemesterRouter.get("/", (req, res) => {
  console.log(res.json({ msg: "View all Semesters" }));
});

SemesterRouter.use(`/:SemesterNo/Subject`, subjectRouter);

module.exports = SemesterRouter;
