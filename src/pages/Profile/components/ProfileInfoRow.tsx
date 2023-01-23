import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

type ProfileInfoRowProps = {
	title: string;
	text: string;
};

const ProfileInfoRow = ({ title, text }: ProfileInfoRowProps) => {
	return (
		<Box sx={{ width: "100%" }}>
			<Box display="flex" justifyContent="space-between" alignItems="center" py={1.5} px={2}>
				<Typography component="span" variant="subtitle1" className="color_secondary">
					{`${title}:`}
				</Typography>
				<Typography component="span" variant="subtitle1">
					{text}
				</Typography>
			</Box>
			<Divider />
		</Box>
	);
};

export default ProfileInfoRow;
