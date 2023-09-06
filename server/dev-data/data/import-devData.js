require("dotenv").config({ path: "./config.env" });

const connectToDatabase = require("../../utilities/connectDB");
const Admin = require("../../models/AdminModel");
const Student = require("../../models/StudentModel");
const Teacher = require("../../models/TeacherModel");
const Homework = require("../../models/HomeworkModel");
const Class = require("../../models/ClassModel");

const fs = require("fs");

// const User = require("../../models/Users");

const teachers = JSON.parse(
  fs.readFileSync(`${__dirname}/teachers-data.json`, "utf-8")
);
const students = JSON.parse(
  fs.readFileSync(`${__dirname}/students-data.json`, "utf-8")
);

const homeworks = JSON.parse(
  fs.readFileSync(`${__dirname}/homeworks-data.json`, "utf-8")
);
const classes = JSON.parse(
  fs.readFileSync(`${__dirname}/classes-data.json`, "utf-8")
);
const admins = JSON.parse(
  fs.readFileSync(`${__dirname}/admin-data.json`, "utf-8")
);
connectToDatabase();

const importData = async () => {
  try {
    console.log("Creating data");
    // await Admin.create(admins, { validateBeforeSave: false });
    await Teacher.create(teachers, { validateBeforeSave: false });
    await Homework.create(homeworks, { validateBeforeSave: false });
    await Student.create(students, { validateBeforeSave: false });
    await Class.create(classes, { validateBeforeSave: false });
    console.log("Data created");

    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};
const DeleteDatas = async () => {
  try {
    console.log("Deleting data");
    await Admin.deleteMany();
    await Teacher.deleteMany();
    await Class.deleteMany();
    await Homework.deleteMany();
    await Student.deleteMany();
    console.log("Data Deleted");

    process.exit();
  } catch (err) {
    // console.log(err);
  }
};

// ! this codes are magic
// ! this codes are magic
// ! this codes are magic
// ! this codes are magic
// console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
}
if (process.argv[2] === "--delete") {
  DeleteDatas();
}
