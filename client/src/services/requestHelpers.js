import axios from "axios";

export const getAll = async function (model) {
  return await axios.get(`http://localhost:3000/api/v1/${model}`);
};
export const getOne = async function (model, id) {
  return await axios.get(`http://localhost:3000/api/v1/${model}/${id}`);
};
export const updateOne = async function (model, id, data) {
  return await axios.patch(`http://localhost:3000/api/v1/${model}/${id}`, data);
};
export const createOne = async function (body) {
  let { model, refactoredData } = body;
  try {
    const res = await axios.post(
      `http://localhost:3000/api/v1/${model}`,
      refactoredData
    );
    console.log(res);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
export const deleteOne = async function (model, id) {
  return await axios.delete(`http://localhost:3000/api/v1/${model}/${id}`);
};

// export const getAllTeachers = async function () {
//   return await axios.get("http://localhost:3000/api/v1/teachers");
// };

// export const getTeacher = async function (teacherId) {
//   return await axios.get(`http://localhost:3000/api/v1/teachers/${teacherId}`);
// };

// export const getAllStudents = async function () {
//   return await axios.get("http://localhost:3000/api/v1/students");
// };

// export const getStudent = async function (studentId) {
//   return await axios.get(`http://localhost:3000/api/v1/students/${studentId}`);
// };
// export const getAllHomeworks = async function () {
//   return await axios.get("http://localhost:3000/api/v1/homeworks");
// };

// export const getHomework = async function (homeworkId) {
//   return await axios.get(
//     `http://localhost:3000/api/v1/homeworks/${homeworkId}`
//   );
// };
