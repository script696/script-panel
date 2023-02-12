import { Alert, Snackbar } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useDispatch } from "react-redux";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

import { useAppSelector } from "../../../lib/hooks";
import { closeSnackBar } from "../../../../app/store/ui/actions";

const SnackBar = () => {
	const {
		snackBar: { isSnackBarOpen, snackBarMessage, snackBarType },
	} = useAppSelector((state) => state.UiReducer);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeSnackBar());
	};

	const getCurrentIcon = () => {
		const errorIcon = <ReportGmailerrorredIcon fontSize="inherit" color="error" />;
		const successIcon = <DoneOutlineIcon fontSize="inherit" color="success" />;

		switch (snackBarType) {
			case "error":
				return errorIcon;
			case "success":
				return successIcon;
			default:
				return undefined;
		}
	};

	return (
		<Snackbar
			anchorOrigin={{ horizontal: "left", vertical: "top" }}
			autoHideDuration={3 * 1000}
			open={isSnackBarOpen}
			onClose={handleClose}
			transitionDuration={0}
		>
			<Alert
				variant="filled"
				severity={snackBarType}
				sx={{ color: "#fff", width: "100%" }}
				icon={getCurrentIcon()}
			>
				{snackBarMessage}
			</Alert>
		</Snackbar>
	);
};

export default SnackBar;
