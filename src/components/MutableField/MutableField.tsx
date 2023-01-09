import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type MutableFieldProps = {
  isEditMode: boolean;
  value: string;
  formik: any;
  id: string;
  label: string;
  multiline?: boolean;
};

const MutableField = ({
  label,
  isEditMode,
  value,
  formik,
  id,
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
      autoComplete="family-name"
      value={value}
      onChange={formik.handleChange}
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
        sx={{ whiteSpace: "pre", margin: 0 }}
      >
        {value}
      </Typography>
    </Grid>
  );
};

export default MutableField;
