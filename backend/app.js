const express = require("express");
require("dotenv").config();
require("./db.connection");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//! Routess
const routes = require("./routes/index.js");
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening On PORT : ${process.env.PORT}`);
});
