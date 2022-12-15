import { Route, Routes } from "react-router-dom";
import { Login, Registration } from "../../pages";
import { ProtectedRoutes } from "../index";
import { MainLayout } from "../../layouts";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="admin" element={<MainLayout />} />
      </Route>
      <Route path="signup" element={<Registration />} />
      <Route path="signin" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
