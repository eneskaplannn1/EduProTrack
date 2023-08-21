import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import User from "./User";

import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    toast.success("logged out successfully");
    logout();
    navigate("/login");
  }
  return (
    <div className={classes.header}>
      <h3>School Management System</h3>
      <div className={classes.container}>
        <User />
        <NavLink to="/account">
          <HiOutlineUser />
        </NavLink>

        <button onClick={handleLogout}>
          <HiArrowRightOnRectangle />
        </button>
      </div>
    </div>
  );
}

export default Header;
