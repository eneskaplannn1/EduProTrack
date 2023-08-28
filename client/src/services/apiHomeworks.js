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
    console.log(err);
    throw new Error(err);
  }
};

export const updateHomework = async function (body) {
  const { id, data } = body;
  try {
    return await customRequst.patch(`/homeworks/${id}`, data);
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