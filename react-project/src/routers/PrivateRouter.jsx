import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const PrivateRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRouter;
