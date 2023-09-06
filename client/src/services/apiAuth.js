import customRequst from "../utils/customRequest";

// customRequst.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTZhOWEyMTIyMGUxMTI2ZmEyNTUzYyIsImlhdCI6MTY5MjkxNzgyMywiZXhwIjoxNjkzMDA0MjIzfQ.dMd3AMgbY0tWvij1Z9-HzitVoNw9ui61T98Dcbix8OM`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const HandleLogin = async function (data) {
  try {
    return await customRequst.post("/auth/login", data);
  } catch (err) {
    // console.log(err);
    throw new Error(err.response.data.message);
  }
};

export const LoginWithJWT = async function () {
  try {
    const res = await customRequst.get("/auth/logUserIn");
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
