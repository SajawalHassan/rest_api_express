const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");

require("dotenv/config");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("We are on home page!");
});

app.use("/posts", postRoute);

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server litening on port ${port}`));
