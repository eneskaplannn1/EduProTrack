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
import Profile from "./pages/AppLayout/Profile";
import AppLayout from "./UI/AppLayout";

import Account from "./pages/AppLayout/Account";
import TeacherDetail from "./features/Teacher/TeacherDetail";
import StudentDetail from "./features/Student/StudentDetail";
import HomeworkDetail from "./features/homework/HomeworkDetail";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="teachers" element={<Teacher />} />
            <Route path="teachers/:teacherId" element={<TeacherDetail />} />
            <Route path="students" element={<Student />} />
            <Route path="students/:studentId" element={<StudentDetail />} />
            <Route path="homeworks" element={<Homework />} />
            <Route path="homeworks/:homeworkId" element={<HomeworkDetail />} />
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
