import axios from "axios";

export const getAll = async function (model) {
  return await axios.get(`http://localhost:3000/api/v1/${model}`);
};

export const getOne = async function (model, id) {
  return await axios.get(`http://localhost:3000/api/v1/${model}/${id}`);
};

export const updateOne = async function (body) {
  const { model, id, data } = body;
  console.log(15);
  try {
    console.log("hi there");
    const res = await axios.patch(
      `http://localhost:3000/api/v1/${model}/${id}`,
      data
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const createOne = async function (body) {
  let { model, data } = body;
  try {
    const res = await axios.post(`http://localhost:3000/api/v1/${model}`, data);
    console.log(res);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
export const deleteOne = async function (body) {
  const { model, _id } = body;
  return await axios.delete(`http://localhost:3000/api/v1/${model}/${_id}`);
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
