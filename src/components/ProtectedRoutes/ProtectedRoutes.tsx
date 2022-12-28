import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { Preloader } from "../index";

const ProtectedRoutes = () => {
  const { isFirstLoad } = useAppSelector((state) => state.LoginReducer);

  if (isFirstLoad) {
    return <Preloader />;
  }

  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={`/signin`} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
