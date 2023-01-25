import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { Preloader } from "..";
import { AdminLayout } from "../../layouts";

const ProtectedRouter = () => {
	const { isFirstLoad } = useAppSelector((state) => state.RequestsReducer);
	const token = localStorage.getItem(ACCESS_TOKEN);

	// if (isFirstLoad) {
	// 	return <Preloader />;
	// }
	//
	// if (!token) {
	// 	return <Navigate to={"/signin"} />;
	// }

	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default ProtectedRouter;
