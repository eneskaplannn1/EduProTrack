const factory = require("../controllers/factoryController");
const Class = require("../models/ClassModel");

exports.getAllClasses = factory.getAll(Class);
exports.getClass = factory.getOne(Class);
exports.createClass = factory.createOne(Class);
exports.updateClass = factory.updateOne(Class);
exports.deleteClass = factory.deleteOne(Class);
