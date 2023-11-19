const express = require(`express`);
const app = express();

require(`dotenv`).config();

app.listen(process.env.PORT, () => {
  console.log(`Listning to port ${process.env.PORT}`);
});

//Routing
