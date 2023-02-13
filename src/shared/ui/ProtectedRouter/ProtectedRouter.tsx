import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../lib/hooks";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { AdminLayout } from "../../../layouts";
import Preloader from "../Preloader/Preloader";

type ProtectedRouterProps = {
	route: string;
};

const ProtectedRouter = ({ route }: ProtectedRouterProps) => {
	const { isFirstLoad } = useAppSelector((state) => state.RequestsReducer);
	const token = localStorage.getItem(ACCESS_TOKEN);

	if (isFirstLoad) {
		return <Preloader />;
	}

	if (!token) {
		return <Navigate to={route} />;
	}

	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default ProtectedRouter;
