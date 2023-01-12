import { Navigate, Outlet } from "react-router-dom";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";

const AuthRouter = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (token) {
    return <Navigate to={`/home`} />;
  }

  return <Outlet />;
};

export default AuthRouter;
