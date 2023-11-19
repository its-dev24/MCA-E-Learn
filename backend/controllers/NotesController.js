const Note = require(`../models/notesModel`);

//To View notes of a particulare Semester

//To add notes

const createNote = async (req, res) => {
  const { title, semester, subject, module, file } = req.body;

  try {
    const note = await Note.create({ title, semester, subject, module, file });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }
};

//To Delete Notes

module.exports = { createNote };
