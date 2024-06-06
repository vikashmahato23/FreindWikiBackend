// src/server.js
require("dotenv").config();
const app = require("./app");
const connectToDB = require("./db/db");

// Connect to MongoDB
connectToDB()
  .then(() => {
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
