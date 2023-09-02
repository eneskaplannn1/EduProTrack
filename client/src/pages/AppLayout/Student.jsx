import { useAuth } from "../../context/AuthProvider";
import StudentList from "../../features/Student/StudentList";

export default function Student() {
  const { user } = useAuth();

  return (
    <>
      <h1>
        {user.role !== "Admin"
          ? `${user.name}'s students list`
          : "All students"}
      </h1>
      <StudentList user={user} />
    </>
  );
}
