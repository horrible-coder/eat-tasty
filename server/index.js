const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const router = require("./routes/router");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

db();

app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
