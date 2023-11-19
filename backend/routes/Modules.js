const express = require(`express`);
const app = express();
const ModuleRouter = express.Router();
const noteRouter = require(`./Notes`);

//View all notes of a Semester
ModuleRouter.get("/", (req, res) => {
  console.log(res.json({ msg: "View all Modules" }));
});

ModuleRouter.use(`/:ModuleNo/Notes`, noteRouter);
module.exports = ModuleRouter;
