//Imports
const express = require(`express`);
const app = express();
require(`dotenv`).config();
const mongoose = require(`mongoose`);

//parsing all body to Json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Importing Router

const AcademicRouter = require(`./routes/AcademicRoutes`);
const notificationRouter = require(`./routes/Notifications`);

//Routing
app.use(AcademicRouter);
app.use(`/Notifications`, notificationRouter);

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
