import { ReactNode, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getAdmin } from "app/store/admin/actions";
import { Navigation } from "widgets/navigation";

import { Footer } from "widgets/footer";

import { AuthProtectedHeader } from "../../widgets/header/AuthProtectedHeader";
import "./style.css";
type AdminLayoutProps = {
	children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAdmin());
	}, []);

	return (
		<div className="adminLayout">
			<nav className="nav">
				<Navigation />
			</nav>
			<header className="header">
				<AuthProtectedHeader />
			</header>
			<main className="main">{children}</main>
			<footer className="footer">
				<Footer classNames={["color_contrastText"]} />
			</footer>
		</div>
	);
};

export default AdminLayout;
