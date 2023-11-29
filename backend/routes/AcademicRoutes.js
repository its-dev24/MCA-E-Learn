const express = require(`express`);
const multer = require("multer");
const AcademicRouter = express.Router();

const {
  createNote,
  getAllNotes,
  getAllSubjects,
  deleteNotes,
  createTempNote,
} = require(`../controllers/AcademicController`);

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./files/");
  },
  filename: (req, file, cb) => {
    return cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

//Get all notes
AcademicRouter.get(`/Notes`, getAllNotes);

//Create notes

AcademicRouter.post("/Notes/", createNote);

//Create Temporary Notes

AcademicRouter.post("/TempNotes/", upload.single("files"), createTempNote);
//Delete a note

AcademicRouter.delete("/Notes/:id", deleteNotes);

//Get All Subjects

AcademicRouter.get("/Subjects/:semester", getAllSubjects);

module.exports = AcademicRouter;
