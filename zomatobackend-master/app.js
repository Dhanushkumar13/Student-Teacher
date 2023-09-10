const express = require("express");
const app = express();
const MentorController = require("./Controllers/Mentor.controller");
const StudentController = require("./Controllers/Student.controller");



app.use("/mentors", MentorController);
app.use("/student", StudentController);

module.exports = app;
