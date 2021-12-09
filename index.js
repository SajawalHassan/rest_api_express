const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

// Initializing app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("We are on home page!");
});

// Saying all routes in "postRoute" should start with "/posts"
app.use("/posts", postRoute);

// Connection db
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server litening on port ${port}`));
