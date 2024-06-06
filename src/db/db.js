// src/db/db.js
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://vikashkm84:J123456789b@cluster0.n8eabkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDB;
