import { Alert, Snackbar } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { closeSnackBar } from "../../store/ui/actions";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const SnackBar = () => {
  const {
    snackBar: { isSnackBarOpen, snackBarMessage, snackBarType },
  } = useAppSelector((state) => state.UiReducer);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSnackBar());
  };

  const getCurrentIcon = () => {
    const errorIcon = (
      <ReportGmailerrorredIcon fontSize="inherit" color="error" />
    );
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
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      autoHideDuration={3 * 1000}
      open={isSnackBarOpen}
      onClose={handleClose}
      transitionDuration={0}
    >
      <Alert
        variant="filled"
        severity={snackBarType}
        sx={{ width: "100%", color: "#fff" }}
        icon={getCurrentIcon()}
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
