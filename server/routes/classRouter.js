const { Router } = require("express");

const ClassController = require("../controllers/classController");
const classRouter = Router();

classRouter
  .route("/")
  .get(ClassController.getAllClasses)
  .post(ClassController.createClass);

classRouter
  .route("/:id")
  .get(ClassController.getClass)
  .patch(ClassController.updateClass)
  .delete(ClassController.deleteClass);

module.exports = classRouter;
