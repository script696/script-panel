import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { EditButton } from "shared/ui/EditButton";
import { PanelTitleBox } from "shared/ui/PanelTitleBox";

const ProductDescription = () => {
	const onTurnOnEditMode = () => {};
	return (
		<Box component="section" p={3}>
			<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
				<Typography component="span" variant="h3" alignSelf="start">
					Personal Title
				</Typography>
				<Button sx={{ textTransform: "none" }}>
					<DeleteIcon sx={{ fontSize: "1.2rem" }} />
				</Button>
			</Box>
			<Box mb={1}>
				<PanelTitleBox title="Description">
					<EditButton onClick={onTurnOnEditMode} />
				</PanelTitleBox>
			</Box>
			<Typography component="p" variant="body1" maxWidth={"70%"}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum, cupiditate doloribus
				explicabo modi nihil nulla placeat quod reiciendis voluptas!
			</Typography>
		</Box>
	);
};

export default ProductDescription;
