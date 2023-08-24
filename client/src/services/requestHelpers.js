import axios from "axios";

export const getAll = async function (model) {
  try {
    return await axios.get(`http://localhost:3000/api/v1/${model}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const getOne = async function (model, id) {
  try {
    return await axios.get(`http://localhost:3000/api/v1/${model}/${id}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateOne = async function (body) {
  const { model, id, data } = body;
  try {
    const res = await axios.patch(
      `http://localhost:3000/api/v1/${model}/${id}`,
      data
    );
    console.log(res);
  } catch (err) {
    throw new Error(err);
  }
};

export const createOne = async function (body) {
  let { model, data } = body;
  try {
    await axios.post(`http://localhost:3000/api/v1/${model}`, data);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const deleteOne = async function (body) {
  const { model, _id } = body;
  try {
    return await axios.patch(`http://localhost:3000/api/v1/${model}/${_id}`, {
      active: false,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const updatePassword = async function (body) {
  try {
    return await axios.post(
      `http://localhost:3000/api/v1/auth/updatePassword`,
      body
    );
  } catch (err) {
    throw new Error(err.response.data.message);
  }
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
