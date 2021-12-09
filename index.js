const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");

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
app.use("/api/posts", postRoute);
app.use("/api/user", authRoute);

// Connection db
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server litening on port ${port}`));
