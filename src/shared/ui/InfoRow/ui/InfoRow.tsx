import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

type InfoRowProps = {
	title: string;
	text: string;
};

const InfoRow = ({ title, text }: InfoRowProps) => {
	return (
		<Box sx={{ width: "100%" }}>
			<Box display="flex" justifyContent="space-between" alignItems="center" py={1.5} px={2}>
				<Typography component="span" variant="subtitle1">
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
export default InfoRow;
