import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import User from "./User";

import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function Header() {
  return (
    <div className={classes.header}>
      <h3>School Management System</h3>
      <div className={classes.container}>
        <User />
        <NavLink to="/account">
          <HiOutlineUser />
        </NavLink>
        <HiArrowRightOnRectangle />
      </div>
    </div>
  );
}

export default Header;
