import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { Preloader } from "../index";
import { AdminLayout } from "../../layouts";

const ProtectedRoutes = () => {
  const { isFirstLoad } = useAppSelector((state) => state.AuthReducer);

  if (isFirstLoad) {
    return <Preloader />;
  }

  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={`/signin`} />;
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default ProtectedRoutes;
