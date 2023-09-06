const { Router } = require("express");

const homeworkController = require("../controllers/homeworkController");
const { protect } = require("../controllers/authController");

const homeworkRouter = Router({ mergeParams: true });

homeworkRouter.use(protect);

homeworkRouter
  .route("/")
  .get(homeworkController.getAllHomeworks)
  .post(homeworkController.createHomework);
homeworkRouter
  .route("/:id")
  .get(homeworkController.getHomework)
  .patch(homeworkController.updateHomework)
  .delete(homeworkController.deleteHomework);

module.exports = homeworkRouter;
