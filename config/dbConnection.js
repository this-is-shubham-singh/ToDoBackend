require("dotenv").config();

const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection successfull");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
