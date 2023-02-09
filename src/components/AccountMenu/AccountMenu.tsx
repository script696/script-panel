import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { Avatar, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useEffect } from "react";

import { signOutUser } from "../../store/auth/actions";
import { useAppSelector } from "../../hooks";

const AccountMenu = () => {
	const { avatarUrl, nickName, role } = useAppSelector((state) => state.UserReducer);
	useEffect(() => {}, [avatarUrl]);
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const navigate = useNavigate();

	const open = Boolean(anchorEl);

	const redirectToProfile = () => {
		navigate("profile");
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		dispatch(signOutUser(navigate));
	};

	return (
		<React.Fragment>
			<Box sx={{ alignItems: "center", display: "flex", textAlign: "center" }}>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Grid container direction="row" alignItems="center">
							<Avatar alt="user avatar" src={avatarUrl} sx={{ marginRight: "15px" }} />
							<Box display="flex" flexDirection="column">
								<Typography textAlign="start" component="span" variant="body1">
									{role}
								</Typography>
								<Typography textAlign="start" component="span" variant="h6">
									{nickName}
								</Typography>
							</Box>
							<KeyboardArrowDownIcon sx={{ color: "#fff" }} />
						</Grid>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
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
				<MenuItem onClick={redirectToProfile}>
					<ListItemIcon>
						<SettingsIcon fontSize="small" />
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
		</React.Fragment>
	);
};

export default AccountMenu;
