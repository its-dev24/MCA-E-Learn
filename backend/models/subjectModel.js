const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const SubjectModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subject", SubjectModel);
