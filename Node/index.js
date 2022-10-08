const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// Middelwares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(process.env.MONGO_DB_KEY, () => {
  console.log("connected to DB");
});

app.get("/", (req, res) => {
  res.send("Welcome to the first route");
});

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
