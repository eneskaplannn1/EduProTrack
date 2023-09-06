import { useAuth } from "../../context/AuthProvider";

import HomeworkList from "../../features/homework/HomeworkList";

function Homework() {
  const { user } = useAuth();
  return (
    <>
      <h2>
        {user.role !== "Admin" ? (
          <>
            <span style={{ color: "#0be1f4f3" }}>{user.name}&#39;s </span>
            HomeworkList
          </>
        ) : (
          "All Homeworks"
        )}
      </h2>
      <HomeworkList user={user} />
    </>
  );
}

export default Homework;
