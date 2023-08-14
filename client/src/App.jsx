import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PageNotFound from "./pages/Error/PageNotFound";
import Notification from "./pages/AppLayout/Notification";
import Message from "./pages/AppLayout/Message";
import Settings from "./pages/AppLayout/Settings";
import Homework from "./pages/AppLayout/Homework";
import Student from "./pages/AppLayout/Student";
import Teacher from "./pages/AppLayout/Teacher";
import DashBoard from "./pages/AppLayout/DashBoard";
import AppLayout from "./UI/AppLayout";

import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/AppLayout/Account";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="students" element={<Student />} />
            <Route path="homework" element={<Homework />} />
            <Route path="settings" element={<Settings />} />
            <Route path="messages" element={<Message />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
