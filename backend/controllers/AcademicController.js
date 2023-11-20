const Note = require(`../models/notesModel`);
const Subject = require(`../models/subjectModel`);
//To View notes of a particulare Semester
const getAllNotes = async (req, res) => {
  const notes = await Note.find({});
  if (!notes) {
    return res.status(400).json({ error: "No Notes to be shown" });
  }
  res.status(200).json(notes);
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

//To Delete Notes

//Get all Subjects

const getAllSubjects = async (req, res) => {
  const { semester } = req.params;
  const subjects = await Subject.find({ semester: semester });
  if (!subjects) {
    return res.status(400).json({ error: "No Subjects found" });
  }
  res.status(200).json(subjects);
};

module.exports = { createNote, getAllNotes, getAllSubjects };
