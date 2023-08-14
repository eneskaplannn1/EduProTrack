import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { MdAssignment, MdOutlineNotifications } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  &svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineCog6Tooth />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/teacher">
            <FaChalkboardTeacher />
            <span>Teacher</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/students">
            <PiStudentBold />
            <span>Students</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/homework">
            <MdAssignment />
            <span>Homework</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/messages">
            <AiOutlineMessage />
            <span>Messages</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/notifications">
            <MdOutlineNotifications />
            <span>Notifications</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <FiSettings />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
