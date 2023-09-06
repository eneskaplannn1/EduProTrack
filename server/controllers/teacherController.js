const factory = require("../controllers/factoryController");
const Teacher = require("../models/TeacherModel");

exports.getAllTeachers = factory.getAll(Teacher);
exports.getTeacher = factory.getOne(Teacher, {
  path: "class",
  select: "className",
});
exports.createTeacher = factory.createOne(Teacher);
exports.updateTeacher = factory.updateOne(Teacher);
exports.deleteTeacher = factory.deleteOne(Teacher);
