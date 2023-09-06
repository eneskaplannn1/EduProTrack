const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: [true, "class must have a name"],
    },
    // validate ile geliştirilebilir
    capacity: {
      type: Number,
      max: 30,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "A class must have at least one Teacher"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ClassSchema.virtual("students", {
  ref: "Student",
  foreignField: "class",
  localField: "_id",
});

ClassSchema.pre(/^find/, function (next) {
  this.populate({
    path: "students",
    select: "name photo _id",
  }).populate({
    path: "teacher",
    select: "name photo _id",
  });
  next();
});

const Class = mongoose.model("Class", ClassSchema);
module.exports = Class;
