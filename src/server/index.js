var path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const articleController = require("./articleController");
const cors = require("cors");
/// Promise mode

// meaning.user_profiling({
//   mode: 'th',
//   lang: 'en'
// }).then(function(res) {
//   console.log(res.body);
// });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
  console.log("API Key: " + process.env.API_KEY);
});

app.post("/analyze", articleController.analyzeArticle);
