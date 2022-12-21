import { Navigate, Route, Routes } from "react-router-dom";
import { Login, PageNotFound, Registration } from "../../pages";
import { ProtectedRoutes } from "../index";
import { MainLayout } from "../../layouts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="test" element={<MainLayout />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="admin" element={<MainLayout />} />
      </Route>
      <Route path="signup" element={<Registration />} />
      <Route path="signin" element={<Login />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={`/404`} replace />} />
    </Routes>
  );
};

export default AppRouter;
