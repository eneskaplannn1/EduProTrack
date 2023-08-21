import { useAuth } from "../context/AuthProvider";
import classes from "./User.module.css";

function User() {
  const { user } = useAuth();
  return (
    <div className={classes.user}>
      {/* <img/> */}
      <p>{user.name}</p>
    </div>
  );
}

export default User;
