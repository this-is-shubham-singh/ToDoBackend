const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 3000;

// get routes and add api/vi before it/
const toDoRoutes = require("./routes/toDoRoutes");
app.use("api/v1", toDoRoutes);

// import database and call
const dbConnect = require("./config/dbConnection");
dbConnect();

app.listen(PORT, () => {
  console.log("connection successfull");
});
