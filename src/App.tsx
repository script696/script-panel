import React, { useEffect } from "react";
import { AuthRouter, ProtectedRouter } from "./components";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/auth/actions";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRotes, PublicRotes } from "./utils/routes/routes";
import {
  Home,
  Login,
  PageNotFound,
  Profile,
  Projects,
  Registration,
} from "./pages";
import Users from "./pages/Users/Users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path={ProtectedRotes.HOME} element={<Home />} />
          <Route path={ProtectedRotes.USERS} element={<Users />} />
          <Route path={ProtectedRotes.PROJECTS} element={<Projects />} />
          <Route path={ProtectedRotes.PROFILE} element={<Profile />} />
        </Route>
        <Route element={<AuthRouter />}>
          <Route path={PublicRotes.SIGNUP} element={<Registration />} />
          <Route path={PublicRotes.SIGNIN} element={<Login />} />
        </Route>
        <Route path={PublicRotes.NOT_FOUND} element={<PageNotFound />} />
        <Route
          path="/"
          element={<Navigate to={ProtectedRotes.HOME} replace />}
        />
        <Route
          path="*"
          element={<Navigate to={PublicRotes.NOT_FOUND} replace />}
        />
      </Routes>
    </>
  );
}

export default App;
