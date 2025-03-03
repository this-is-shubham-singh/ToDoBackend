const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 3000;

// middleware to access json file  
app.use(express.json());

// get routes and add api/vi before it/
const toDoRoutes = require("./routes/toDoRoutes");
app.use("/api/v1", toDoRoutes);

// import database and call
const dbConnectFunction = require("./config/dbConnection");
dbConnectFunction();

app.listen(PORT, () => {
  console.log("server started");
});


app.get("/", (req, res) => {
  res.send("<h1>home page</h1>")
})