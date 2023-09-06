const { Router } = require("express");

const studentController = require("../controllers/studentController");
const userController = require("../controllers/userController");

const studentRouter = Router({ mergeParams: true });
const homeworkRouter = require("./homeworkRouter");

const { protect } = require("../controllers/authController");

// TODO: studentRouter.route("/top-5-successfull",ratingMiddleware,studentController.getAllStudents)

// * aggregation metodunu kullanarak öğrencileri ortalama başarılarına göre sıralayabilirim
// TODO: studentRouter.route("/get-student-stats",studentController.getStudentStats)

//http://localhost:3000/api/v1/students/64a6a9a21220e1126fa2553b/homeworks //get all homeworks for spesific student
//http://localhost:3000/api/v1/students/64a6a9a21220e1126fa2553b/homeworks/64a8850c8a97a7750bb96a54 //get homework for spesific student

studentRouter.use("/:studentId/homeworks", homeworkRouter);

studentRouter.use(protect);

studentRouter.get("/getMe", userController.getMe, studentController.getStudent);
studentRouter.patch("/updateMe", userController.updateMe);
studentRouter.get("/deleteMe", userController.deleteMe);

studentRouter
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

studentRouter
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = studentRouter;
