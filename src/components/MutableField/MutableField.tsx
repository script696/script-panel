import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type MutableFieldProps = {
  isEditMode: boolean;
  value: string;
  formik: any;
  id: string;
  label: string;
  autoComplete: string;
  multiline?: boolean;
};

const MutableField = ({
  label,
  isEditMode,
  value,
  formik,
  id,
  autoComplete,
  multiline = false,
}: MutableFieldProps) => {
  const fieldTitle = `${id[0].toUpperCase()}${id.slice(1)}:`;

  return isEditMode ? (
    <TextField
      size="small"
      margin="normal"
      fullWidth
      multiline={multiline}
      id={id}
      label={label}
      name={id}
      autoComplete={autoComplete}
      value={value}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={formik.touched[id] && formik.errors[id]}
    />
  ) : (
    <Grid container direction="column" mb={2}>
      <Typography component="h4" variant="h6">
        {fieldTitle}
      </Typography>
      <Typography
        component="span"
        variant="body1"
        my={2}
        sx={{ margin: 0, whiteSpace: "pre" }}
      >
        {value}
      </Typography>
    </Grid>
  );
};

export default MutableField;
