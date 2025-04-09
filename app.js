const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./database/mongooseDb");
const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoute);

app.get("/", (req, res) => {
  res.send("Hello, REST Api");
});

// connect through mongoose
connectDB(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
