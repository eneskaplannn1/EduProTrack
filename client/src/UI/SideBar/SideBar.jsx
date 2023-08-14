import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  /* background-color: var(--color-grey-0); */
  background-color: black;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-0);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
