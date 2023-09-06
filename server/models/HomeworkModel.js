const mongoose = require("mongoose");

const HomeworkSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: [true, "Homework must have a subject"],
    },
    topic: {
      type: String,
      required: [true, "Homework must have a topic"],
    },
    description: {
      type: String,
      required: [true, "Homework must have a description!"],
    },
    startDate: {
      type: Date,
      default: new Date(Date.now() + 60 * 1000 * 60 * 24),
    },
    expirationDate: {
      type: Date,
      default: new Date(Date.now() + 60 * 1000 * 60 * 24 * 7),
    },
    status: {
      type: String,
      enum: {
        values: ["Pending", "Successful", "Failed", "Evaluating"],
      },
      default: "Pending",
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: [true, "A homework must have a student"],
      },
    ],
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "A homework must have a teacher"],
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: [true, "A homework must be assigned to a specific class"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { bufferTimeoutMS: 10000 }
);

// HomeworkSchema.pre(/^find/, function (next) {
// this.populate({
//   path: "students",
//   select: "name email role",
// }).populate({
//   path: "teacher",
//   select: "name email role",
// });
//   next();
// });

const Homework = mongoose.model("Homework", HomeworkSchema);
module.exports = Homework;
