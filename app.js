const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./database/mongooseDb");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// connect through mongoose
connectDB(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
