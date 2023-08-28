import customRequst from "../utils/customRequest";

export const getTeachers = async function () {
  try {
    const res = await customRequst.get(`/teachers`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTeacher = async function (id) {
  try {
    return await customRequst.get(`/teachers/${id}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateTeacher = async function (body) {
  const { id, data } = body;
  try {
    return await customRequst.patch(`/teachers/${id}`, data);
  } catch (err) {
    throw new Error(err);
  }
};

export const createTeacher = async function ({ data }) {
  try {
    const res = await customRequst.post(`/teachers`, data);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const deleteTeacher = async function ({ _id }) {
  try {
    return await customRequst.patch(`/teachers/${_id}`, {
      active: false,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
