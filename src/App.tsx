import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./shared/lib/constants/routes";
import { Admin, Login, PageNotFound, Product, Products, Projects, Registration } from "./pages";
import Users from "./pages/Users/Users";
import ProtectedRouter from "./shared/ui/ProtectedRouter/ProtectedRouter";
import AuthRouter from "./shared/ui/AuthRouter/AuthRouter";
import { checkAuth } from "./app/store/auth/actions";

const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(checkAuth());
	}, []);

	return (
		<>
			<Routes>
				<Route element={<ProtectedRouter route={PUBLIC_ROUTES.SIGNIN} />}>
					<Route path={PROTECTED_ROUTES.PRODUCT} element={<Product />} />
					<Route path={PROTECTED_ROUTES.PRODUCTS} element={<Products />} />
					<Route path={PROTECTED_ROUTES.USERS} element={<Users />} />
					<Route path={PROTECTED_ROUTES.PROJECTS} element={<Projects />} />
					<Route path={PROTECTED_ROUTES.PROFILE} element={<Admin />} />
				</Route>
				<Route element={<AuthRouter />}>
					<Route path={PUBLIC_ROUTES.SIGNUP} element={<Registration />} />
					<Route path={PUBLIC_ROUTES.SIGNIN} element={<Login />} />
				</Route>
				<Route path={PUBLIC_ROUTES.NOT_FOUND} element={<PageNotFound />} />
				<Route path="/" element={<Navigate to={PROTECTED_ROUTES.PRODUCTS} replace />} />
				<Route path="*" element={<Navigate to={PUBLIC_ROUTES.NOT_FOUND} replace />} />
			</Routes>
		</>
	);
};

export default App;
