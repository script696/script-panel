import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, PageNotFound, Registration } from "../../pages";
import { ProtectedRoutes } from "../index";
import { MainLayout } from "../../layouts";
import Users from "../../pages/Users/Users";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
      <Route path="signup" element={<Registration />} />
      <Route path="signin" element={<Login />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={`/404`} replace />} />
    </Routes>
  );
};

export default AppRouter;
