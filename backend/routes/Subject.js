const express = require(`express`);
const app = express();
const SubjectRouter = express.Router();
const ModuleRouter = require(`./Modules`);

//View all notes of a Semester
SubjectRouter.get("/", (req, res) => {
  console.log(res.json({ msg: "View all Subjects" }));
});

SubjectRouter.use(`/:SubjectName/Modules`, ModuleRouter);
module.exports = SubjectRouter;
