import axios from "axios";

export const HandleLogin = async function (body) {
  return await axios.post("http://localhost:3000/api/v1/auth/login", body);
};
