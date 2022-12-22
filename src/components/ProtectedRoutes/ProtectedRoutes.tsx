import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";

const ProtectedRoutes = () => {
  const { isUserAuth, loading } = useAppSelector((state) => state.LoginReducer);

  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={`/signin`} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
