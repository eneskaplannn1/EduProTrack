const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const DB = process.env.DATABASE;

    await mongoose.connect(DB, { autoIndex: false });
    console.log("Connected to the Database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectToDatabase;
