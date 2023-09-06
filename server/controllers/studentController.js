const factory = require("../controllers/factoryController");
const Student = require("../models/StudentModel");

//! bu mantığa dayanan bir middleware ekleyebilirim
// const getBestStudent = (req, res, next) => {
//   req.query.note === 4;
//   req.query.gender === "male";
//   next();
// };

exports.getAllStudents = factory.getAll(Student);
exports.getStudent = factory.getOne(
  Student,
  {
    path: "teacher",
    select: "name",
  },
  {
    path: "class",
    select: "className",
  }
);
exports.createStudent = factory.createOne(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);
