import { MainLayout } from "../../layouts";
import { Route, Routes } from "react-router-dom";
import { Login, Registration } from "../../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="admin" element={<MainLayout />} />
      <Route path="signup" element={<Registration />} />
      <Route path="signin" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
