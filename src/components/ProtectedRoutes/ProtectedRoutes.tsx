import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MainLayout } from "../../layouts";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";

const ProtectedRoutes = () => {
  const { isFirstLoad } = useAppSelector((state) => state.LoginReducer);

  if (isFirstLoad) {
    return <div>loading...</div>;
  }

  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={`/signin`} />;
  }

  return (
    <>
      <MainLayout />
      <Outlet />;
    </>
  );
};

export default ProtectedRoutes;
