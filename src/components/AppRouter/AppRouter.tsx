import { MainLayout } from "../../layouts";
import { Route, Routes } from "react-router-dom";
import { Registration } from "../../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="admin" element={<MainLayout />} />
      <Route path="signup" element={<Registration />} />
    </Routes>
  );
};

export default AppRouter;
