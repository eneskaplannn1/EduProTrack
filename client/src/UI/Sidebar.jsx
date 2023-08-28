import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { PiStudentBold } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";

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
  return (
    <StyledSidebar>
      <ul>
        <li>
          <CgProfile />
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <PiStudentBold />
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <GiTeacher />
          <NavLink to="/teachers">Teachers</NavLink>
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
    </StyledSidebar>
  );
}

// complain kısmı eklenebilir

export default Sidebar;
