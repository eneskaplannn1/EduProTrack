const factory = require("../controllers/factoryController");
const Homework = require("../models/HomeworkModel");
const Class = require("../models/ClassModel");
const catchAsync = require("../utilities/catchAsync");

exports.giveHomeworkToStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const homework = {
    teacher: req.user._id,
    students: [studentId],
    topic: req.body.topic,
    description: req.body.description,
    status: "pending",
    class: req.user.class,
  };

  const doc = await Homework.create(homework);

  res.status(200).json({
    status: "success",
    message: "homework created successfully",
    doc,
  });
});

exports.giveHomeworkToClass = catchAsync(async (req, res, next) => {
  const { classId } = req.params;
  const classroom = await Class.findById(classId);

  const homework = {
    teacher: req.user._id,
    students: [...classroom.students],
    topic: req.body.topic,
    description: req.body.description,
    class: classId,
  };

  const doc = await Homework.create(homework);

  res.status(200).json({
    status: "success",
    message: "homework created successfully for classroom",
    doc,
  });
});

exports.getAllHomeworks = factory.getAll(Homework);
exports.getHomework = factory.getOne(
  Homework,
  {
    path: "students",
    select: "name",
  },
  {
    path: "class",
    select: "className",
  },
  {
    path: "teacher",
    select: "name",
  }
);
exports.createHomework = factory.createOne(Homework);
exports.updateHomework = factory.updateOne(Homework);
exports.deleteHomework = factory.deleteOne(Homework);
