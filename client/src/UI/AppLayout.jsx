import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 4rem 1fr;
`;
const StyledMain = styled.div`
  padding: 2rem;
  background-color: #111827;
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledContainer>
      <Header />
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
}

export default AppLayout;
