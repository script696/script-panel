import { useState, MouseEvent } from "react";

type UseAdminMenu = () => {
	anchorEl: null | HTMLElement;
	handleOpenMenu: (e: MouseEvent<HTMLElement>) => void;
	handleCloseMenu: () => void;
};

const useAdminMenu: UseAdminMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleOpenMenu = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	return { anchorEl, handleCloseMenu, handleOpenMenu };
};

export default useAdminMenu;
