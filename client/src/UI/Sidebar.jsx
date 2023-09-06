import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { PiStudentBold } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { useAuth } from "../context/AuthProvider";

const StyledSidebar = styled.div`
  grid-row: 2 / 3;
  background-color: #18212f;
  padding: 1rem;
  border-right: 1px solid white;

  ul {
    margin-top: 1rem;
  }
  li {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: left;
    margin: 10px 0;
    padding: 8px 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;

    svg {
      min-height: 40px;
      min-width: 40px;
      color: #4f46e5;
    }
    &:hover {
      background-color: #111827;
    }
  }
`;

function Sidebar() {
  const { user } = useAuth();
  return (
    <StyledSidebar>
      <ul>
        <li>
          <CgProfile />
          <NavLink to="/profile">Profile</NavLink>
        </li>
        {user.role !== "Student" && (
          <li>
            <PiStudentBold />
            <NavLink to="/students">Students</NavLink>
          </li>
        )}
        {user.role === "Admin" && (
          <li>
            <GiTeacher />
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
        )}
        <li>
          <MdAssignment />
          <NavLink to="/homeworks">Homeworks</NavLink>
        </li>
        {user.role === "Teacher" && (
          <li>
            <SiGoogleclassroom />
            <NavLink to={`/classes/${user.class}`}>Classroom</NavLink>
          </li>
        )}
        {user.role === "Admin" && (
          <li>
            <SiGoogleclassroom />
            <NavLink to="/classes" end>
              Classes
            </NavLink>
          </li>
        )}
        <li>
          <HiOutlineUser />
          <NavLink to="/account" end>
            Account
          </NavLink>
        </li>
        {/* <li>
          <IoSettingsSharp />
          <NavLink to="/settings">Settings</NavLink>
        </li> 
         <li>
          <AiFillMessage />
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li>
          <IoMdNotifications />
          <NavLink to="/notifications">Upload Notices</NavLink>
        </li> */}
      </ul>
    </StyledSidebar>
  );
}

// complain kısmı eklenebilir

export default Sidebar;
