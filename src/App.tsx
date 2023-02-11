import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRouter, ProtectedRouter } from "./components";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./shared/lib/constants/routes";
import { Admin, Home, Login, PageNotFound, Projects, Registration } from "./pages";
import Users from "./pages/Users/Users";
import { checkAuth } from "./app/store/auth/actions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, []);

	return (
		<>
			<Routes>
				<Route element={<ProtectedRouter />}>
					<Route path={PROTECTED_ROUTES.HOME} element={<Home />} />
					<Route path={PROTECTED_ROUTES.USERS} element={<Users />} />
					<Route path={PROTECTED_ROUTES.PROJECTS} element={<Projects />} />
					<Route path={PROTECTED_ROUTES.PROFILE} element={<Admin />} />
				</Route>
				<Route element={<AuthRouter />}>
					<Route path={PUBLIC_ROUTES.SIGNUP} element={<Registration />} />
					<Route path={PUBLIC_ROUTES.SIGNIN} element={<Login />} />
				</Route>
				<Route path={PUBLIC_ROUTES.NOT_FOUND} element={<PageNotFound />} />
				<Route path="/" element={<Navigate to={PROTECTED_ROUTES.HOME} replace />} />
				<Route path="*" element={<Navigate to={PUBLIC_ROUTES.NOT_FOUND} replace />} />
			</Routes>
		</>
	);
}

export default App;
