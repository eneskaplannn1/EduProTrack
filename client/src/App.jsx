import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

import PageNotFound from "./pages/Error/PageNotFound";
import Notification from "./pages/AppLayout/Notification";
import Message from "./pages/AppLayout/Message";
import Settings from "./pages/AppLayout/Settings";
import Homework from "./pages/AppLayout/Homework";
import Student from "./pages/AppLayout/Student";
import Teacher from "./pages/AppLayout/Teacher";
import AppLayout from "./UI/AppLayout";

import Account from "./pages/AppLayout/Account";
import TeacherDetail from "./features/Teacher/TeacherDetail";
import StudentDetail from "./features/Student/StudentDetail";
import HomeworkDetail from "./features/homework/HomeworkDetail";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthProvider";
import RequiredAuth from "./features/auth/RequiredAuth";
import UnAuthorized from "./pages/Auth/UnAuthorized";
import UserProfile from "./features/profile/UserProfile";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          loading: {
            duration: 3000,
          },
          style: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "grey",
          },
        }}
      />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <RequiredAuth allowedRoles={["Student", "Teacher", "Admin"]}>
                  <AppLayout />
                </RequiredAuth>
              }
            >
              <Route index element={<Navigate replace to="profile" />} />

              {/* everyone  */}
              <Route path="profile" element={<UserProfile />} />
              <Route path="messages" element={<Message />} />
              <Route path="homeworks" element={<Homework />} />
              <Route
                path="homeworks/:homeworkId"
                element={<HomeworkDetail />}
              />
              <Route path="settings" element={<Settings />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="account" element={<Account />} />
              {/* admin,teacher */}

              <Route
                path="students"
                element={
                  <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                    <Student />
                  </RequiredAuth>
                }
              />
              <Route
                path="students/:studentId"
                element={
                  <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                    <StudentDetail />
                  </RequiredAuth>
                }
              />

              {/* only admin */}
              <Route
                path="teachers"
                element={
                  <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                    <Teacher />
                  </RequiredAuth>
                }
              />
              <Route
                path="teachers/:teacherId"
                element={
                  <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                    <TeacherDetail />
                  </RequiredAuth>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="unAuthorized" element={<UnAuthorized />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

{
  /* <Route path="settings" element={<HomeworkForm />} />
<Route path="settings/st" element={<StudentForm />} />
<Route path="settings/tc" element={<TeacherForm />} /> */
}
