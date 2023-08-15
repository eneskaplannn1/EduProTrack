import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";

import classes from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={classes.container}>
      <Header className={classes.main} />
      <SideBar className={classes.main} />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
