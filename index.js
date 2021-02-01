require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes.js")(app);

const connect = (url) => {
  return mongoose.connect(url, config.db.options);
};

app.listen(config.port);
connect(config.db.prod);
mongoose.connection.on("error", console.log);
