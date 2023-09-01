import customRequst from "../utils/customRequest";

export const getHomeworks = async function () {
  try {
    const res = await customRequst.get(`/homeworks`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getHomework = async function (id) {
  try {
    return await customRequst.get(`/homeworks/${id}`);
  } catch (err) {
    throw new Error(err);
  }
};
export const getStudentHomeworks = async function (id) {
  try {
    return await customRequst.get(`/students/${id}/homeworks`);
  } catch (err) {
    throw new Error(err);
  }
};
export const getTeacherHomeworks = async function (id) {
  try {
    return await customRequst.get(`/teachers/${id}/homeworks`);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateHomework = async function (body) {
  const { id, data } = body;
  let refactoredData;
  if (data.status) {
    refactoredData = { status: data.status };
  } else {
    refactoredData = {
      subject: data.subject,
      topic: data.topic,
      description: data.description,
      startDate: data.startDate,
      expirationDate: data.expirationDate,
    };
  }
  console.log(refactoredData);
  try {
    const res = await customRequst.patch(`/homeworks/${id}`, refactoredData);
    console.log(res);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const createHomework = async function ({ data }) {
  try {
    const res = await customRequst.post(`/homeworks`, data);
    console.log(res);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const deleteHomework = async function ({ _id }) {
  try {
    return await customRequst.delete(`/homeworks/${_id}`);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

// export const deleteHomework = async function (body) {
//   const { model, _id } = body;
//   try {
//     return await customRequst.patch(`/homeworks/${_id}`, {
//       active: false,
//     });
//   } catch (err) {
//     throw new Error(err.response.data.message);
//   }
// };
