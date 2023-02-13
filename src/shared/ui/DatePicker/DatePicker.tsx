import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker() {
	const [value, setValue] = React.useState<Dayjs | null>(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label="Date Of Birth"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				views={["year", "month", "day"]}
				renderInput={(params) => <TextField {...params} size="small" fullWidth />}
			/>
		</LocalizationProvider>
	);
}
