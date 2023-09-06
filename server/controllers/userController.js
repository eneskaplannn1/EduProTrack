const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/errFeature");
const filterObj = require("../utilities/filterObj");

const Student = require("../models/StudentModel");
const Teacher = require("../models/TeacherModel");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password)
    return next(new AppError("You cannot update your password from here"));

  const filteredObj = filterObj(
    req.body,
    "name",
    "email",
    "username",
    "age",
    "phoneNum",
    "gender",
    "address"
  );
  let updatedUser;

  if (req.user.role === "Student")
    updatedUser = await Student.findByIdAndUpdate(req.user._id, filteredObj, {
      new: true,
      runValidators: true,
    });
  if (req.user.role === "Teacher")
    updatedUser = await Teacher.findByIdAndUpdate(req.user._id, filteredObj, {
      new: true,
      runValidators: true,
    });

  res.status(200).json({
    status: "success",
    data: { updatedUser },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  let doc;
  if (req.user.role === "Student")
    doc = await Student.findByIdAndUpdate(req.user._id, { active: false });
  if (req.user.role === "Teacher")
    doc = await Teacher.findByIdAndUpdate(
      req.user._id,
      { active: false },
      { new: true, runValidators: true }
    );
  res.status(200).json({
    status: "success",
    message: "user deleted successfully",
    data: null,
  });
});
