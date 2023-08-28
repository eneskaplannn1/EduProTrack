import customRequst from "../utils/customRequest";

export const updatePassword = async function (body) {
  // console.log(body);
  try {
    return await customRequst.patch(`/auth/updatePassword`, body);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const updateMe = async function (body) {
  const { model, data } = body;
  try {
    return await customRequst.patch(`/${model}/updateMe`, data);
  } catch (err) {
    throw new Error(err);
  }
};

export const getAll = async function (model) {
  try {
    const res = await customRequst.get(`http://localhost:3000/api/v1/${model}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getOne = async function (model, id) {
  try {
    return await customRequst.get(`/${model}/${id}`);
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
};

// export const updateOne = async function (body) {
//   const { model, id, data } = body;
//   try {
//     return await customRequst.patch(`/${model}/${id}`, data);
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const createOne = async function (body) {
//   let { model, data } = body;
//   try {
//     const res = await customRequst.post(`/${model}`, data);
//     console.log(res);
//     return res;
//   } catch (err) {
//     throw new Error(err.response.data.message);
//   }
// };

// export const deleteOne = async function (body) {
//   const { model, _id } = body;
//   try {
//     return await customRequst.patch(`/${model}/${_id}`, {
//       active: false,
//     });
//   } catch (err) {
//     throw new Error(err.response.data.message);
//   }
// };

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
