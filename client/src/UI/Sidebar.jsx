import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

import { PiStudentBold } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <CgProfile />
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <GiTeacher />
          <NavLink to="/teachers">Teachers</NavLink>
        </li>
        <li>
          <PiStudentBold />
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <MdAssignment />
          <NavLink to="/homeworks">Homeworks</NavLink>
        </li>
        <li>
          <SiGoogleclassroom />
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <AiFillMessage />
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li>
          <IoMdNotifications />
          <NavLink to="/notifications">Upload Notices</NavLink>
        </li>

        <li>
          <IoSettingsSharp />
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}

// complain kısmı eklenebilir

export default Sidebar;
