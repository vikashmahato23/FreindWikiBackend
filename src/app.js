// src/app.js
const express = require("express");
const helloRoute = require("./routes/hello");
const app = express();
const userRoute = require("./routes/user");
// Middleware
app.use(express.json());

// Routes
app.use("/api/hello", helloRoute);
app.use("/api/user", userRoute);
module.exports = app;
