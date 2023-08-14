import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { styled } from "styled-components";

const StyledAppLayout = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  flex-direction: column;
`;

const Main = styled.main`
  /* background-color: var(--color-grey-50);
   */
  background-color: black;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
