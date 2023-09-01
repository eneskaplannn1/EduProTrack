import { toast } from "react-hot-toast";
import { LoginWithJWT } from "../services/apiAuth";

export default async function loginWithJWT({ dispatch, logout }) {
  const token = localStorage.getItem("accessToken");
  if (!token) return;
  console.log(token);
  try {
    const data = await LoginWithJWT();
    if (!data) {
      localStorage.removeItem("accessToken");
      return toast.error("Your session has been expired please log in again");
    } else {
      dispatch({ type: "login-with-jwt", payload: data });
    }
  } catch (err) {
    toast.error(err.message);
    logout();
  }
}
