//Imports
const express = require(`express`);
const app = express();
require(`dotenv`).config();
const mongoose = require(`mongoose`);
const cors = require("cors");
//parsing all body to Json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//set file as static
app.use("/files", express.static("files"));
app.use("/notifications", express.static("notifications"));

//Importing Router

const AcademicRouter = require(`./routes/AcademicRoutes`);
const notificationRouter = require(`./routes/Notifications`);
const AdminRouter = require(`./routes/AdminRoutes`);

//Routing
app.use(AcademicRouter);
app.use(notificationRouter);
app.use(AdminRouter);

//mongo connecting to DB and Listning
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Listning to port ${process.env.PORT}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
