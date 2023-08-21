import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

function RequiredAuth({ allowedRoles, children }) {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user);

  return allowedRoles.includes(user?.role) ? (
    children
  ) : user ? (
    <Navigate to="/unAuthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiredAuth;
