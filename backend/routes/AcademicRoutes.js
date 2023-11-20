const express = require(`express`);

const AcademicRouter = express.Router();

const {
  createNote,
  getAllNotes,
  getAllSubjects,
} = require(`../controllers/AcademicController`);

//Get all notes
AcademicRouter.get(`/Notes`, getAllNotes);

//Create notes

AcademicRouter.post("/Notes/", createNote);

module.exports = AcademicRouter;

//Delete a note

AcademicRouter.delete("/Notes/:id");

//Get All Subjects

AcademicRouter.get("/Subjects/:semester", getAllSubjects);
