import axios from "axios";

export const HandleLogin = async function (body) {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      body
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
