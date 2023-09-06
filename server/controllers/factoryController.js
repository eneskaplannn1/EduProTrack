const { default: mongoose } = require("mongoose");
const apiFeatures = require("../utilities/apiFeatures");
const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/errFeature");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // ! faydalı olabilir
    let filter = {};
    if (req.params.studentId) filter = { students: req.params.studentId };
    if (req.params.teacherId) filter = { teacher: req.params.teacherId };

    const feautures = new apiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();

    const doc = await feautures.query;
    // console.log(doc);
    res.status(200).json({
      status: "success",
      results: doc.length,
      doc,
    });
  });

exports.getOne = (Model, ...Populate) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (Populate) query = query.populate(Populate);
    const doc = await query;
    if (!doc) return next(new AppError("No document find by that id ", 404));

    res.status(200).json({
      status: "success",
      doc,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (req.body.password) {
      return next(
        new AppError("You are not allowed to change password here", 404)
      );
    }
    const doc = await Model.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!doc) return next(new AppError("No document find by that id ", 404));

    res.status(200).json({
      status: "success",
      newDocument: {
        doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return next(new AppError("No document find by that id ", 404));

    res.status(200).json({
      status: "success",
      message: "document deleted successfully",
    });
  });
