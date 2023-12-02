const { default: mongoose } = require("mongoose");
const Note = require(`../models/notesModel`);
const Subject = require(`../models/subjectModel`);

const Temp = require("../models/tempNotes");

//Setting up multer

//To View notes of a particulare Semester
const getAllNotes = async (req, res) => {
  const { semester, module, subjectCode } = req.query;
  console.log(semester, module, subjectCode);
  const notes = await Note.find({
    semester: semester,
    module: module,
    subjectCode: subjectCode,
  });
  if (!notes) {
    return res.status(400).json({ error: "No Notes to be shown" });
  }
  res.status(200).json(notes);
};
//To get all Temporary Notes
const getTempNotes = async (req, res) => {
  const tempNote = await Temp.find({});
  if (!tempNote) {
    return res.status(400).json({ error: "No Notes to be shown" });
  }
  res.status(200).json(tempNote);
};

//To add notes

const createNote = async (req, res) => {
  const { title, semester, subjectCode, module, file } = req.body;

  try {
    const note = await Note.create({
      title,
      semester,
      subjectCode,
      module,
      file,
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }
};
//To add temp notes

const createTempNote = async (req, res) => {
  // console.log(req.file);
  // console.log(req.body);

  const { title, semester, subjectCode, module } = req.body;
  const file = req.file.originalname;
  // console.log(file, title, semester, subjectCode, module);
  try {
    const Tempnote = await Temp.create({
      title,
      semester,
      subjectCode,
      module,
      file,
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }
};
//To Delete Notes

const deleteNotes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }
  const notes = await Note.findOneAndDelete({ _id: id });
  if (!notes) {
    return res.status(404).json({ error: "not Such note Exist" });
  }
  res.status(200).json(notes);
};

//Get all Subjects

const getAllSubjects = async (req, res) => {
  const { semester } = req.params;
  const subjects = await Subject.find({ semester: semester });
  if (!subjects) {
    return res.status(400).json({ error: "No Subjects found" });
  }
  res.status(200).json(subjects);
};

module.exports = {
  createNote,
  getAllNotes,
  getAllSubjects,
  deleteNotes,
  createTempNote,
  getTempNotes,
};
