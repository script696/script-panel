import Menu from "@mui/material/Menu";
import * as React from "react";
import { Divider, ListItemIcon, MenuItem } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { PROTECTED_ROUTES } from "shared/lib/constants/routes";
import { signOut } from "app/store/auth/actions";

type AdminMenuProps = {
	anchorEl: null | HTMLElement;
	isMenuOpen: boolean;
	onCloseMenu: () => void;
};

const AdminMenu = ({ anchorEl, isMenuOpen, onCloseMenu }: AdminMenuProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRedirectToProfile = () => {
		navigate(PROTECTED_ROUTES.PROFILE);
	};

	const handleLogout = () => {
		dispatch(signOut({ navigate }));
	};

	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={isMenuOpen}
			onClose={onCloseMenu}
			onClick={onCloseMenu}
			PaperProps={{
				elevation: 0,
				sx: {
					"& .MuiAvatar-root": {
						height: 32,
						ml: -0.5,
						mr: 1,
						width: 32,
					},
					"&:before": {
						bgcolor: "background.paper",
						content: "\"\"",
						display: "block",
						height: 10,
						position: "absolute",
						right: 14,
						top: 0,
						transform: "translateY(-50%) rotate(45deg)",
						width: 10,
						zIndex: 0,
					},
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					minWidth: "150px",
					mt: 1.5,
					overflow: "visible",
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem onClick={handleRedirectToProfile}>
				<ListItemIcon>
					<AccountBoxIcon fontSize="small" />
				</ListItemIcon>
				Profile
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleLogout}>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default AdminMenu;
