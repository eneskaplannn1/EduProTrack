const { Router } = require("express");

const teacherController = require("../controllers/teacherController");
const homeworkController = require("../controllers/homeworkController");
const userController = require("../controllers/userController");
const { protect } = require("../controllers/authController");

const homeworkRouter = require("../routes/homeworkRouter");
const studentRouter = require("../routes/studentRouter");

const teacherRouter = Router();

//TODO update Homework for spesific student , for example expiration date of homework etc.

teacherRouter.use("/:teacherId/homeworks", homeworkRouter);
teacherRouter.use("/:teacherId/students", studentRouter);

teacherRouter.use(protect);

teacherRouter.get("/getMe", userController.getMe, teacherController.getTeacher);
teacherRouter.patch("/updateMe", userController.updateMe);
teacherRouter.delete("/deleteMe", userController.deleteMe);

teacherRouter
  .route("/giveHomework/:studentId")
  .post(homeworkController.giveHomeworkToStudent);

teacherRouter
  .route("/giveHomeworkToClass/:classId")
  .post(homeworkController.giveHomeworkToClass);

teacherRouter
  .route("/")
  .get(teacherController.getAllTeachers)
  .post(teacherController.createTeacher);
teacherRouter
  .route("/:id")
  .get(teacherController.getTeacher)
  .patch(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

module.exports = teacherRouter;
