import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogin = false;

  if (!isLogin) {
    return <Navigate to={`/signin`} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
