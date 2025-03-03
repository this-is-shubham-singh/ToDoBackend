require("dotenv").config();

const mongoose = require("mongoose");

const dbConnectFunction = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connection successfull");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

module.exports = dbConnectFunction;
