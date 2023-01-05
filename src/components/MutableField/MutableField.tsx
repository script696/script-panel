import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type MutableFieldProps = {
  isEditMode: boolean;
  value: string;
  formik: any;
  id: string;
  label: string;
};

const MutableField = ({
  label,
  isEditMode,
  value,
  formik,
  id,
}: MutableFieldProps) => {
  return isEditMode ? (
    <TextField
      size="small"
      margin="normal"
      fullWidth
      id={id}
      label={label}
      name={id}
      autoComplete="family-name"
      value={value}
      onChange={formik.handleChange}
    />
  ) : (
    <Typography component="p" variant="h6" my={2}>
      {value}
    </Typography>
  );
};

export default MutableField;
