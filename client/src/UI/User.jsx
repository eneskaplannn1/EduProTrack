import { useAuth } from "../context/AuthProvider";

function User() {
  const { user } = useAuth();
  return (
    <div style={{ display: "flex", marginRight: "8px" }}>
      <p>{user.name}</p>
    </div>
  );
}

export default User;
