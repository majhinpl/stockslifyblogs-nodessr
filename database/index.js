const mongoose = require("mongoose");

const connectString = process.env.dbConnectString;

async function connectDb() {
  try {
    await mongoose.connect(connectString);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error", error);
  }
}

module.exports = connectDb;
