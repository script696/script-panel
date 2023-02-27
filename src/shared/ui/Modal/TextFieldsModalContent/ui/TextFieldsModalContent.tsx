import { Box, Button } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React, { ReactNode } from "react";

type TextFieldsModalContentProps = {
	children: ReactNode;
	onCancelForm: () => void;
	formId: string;
};
const TextFieldsModalContent = ({ children, onCancelForm, formId }: TextFieldsModalContentProps) => {
	return (
		<Box display="flex" flexDirection="column" height="100%" justifyContent={"space-between"}>
			{children}
			<Box display={"flex"} justifyContent="center" alignItems="center" width="100%" columnGap="2rem">
				<LoadingButton
					form={formId}
					type="submit"
					variant="contained"
					color="inherit"
					className="color_secondary"
					disabled={false}
					loading={false}
					sx={{ my: 2, textTransform: "none", width: "6rem" }}
				>
					Update Description
				</LoadingButton>
				<Button onClick={onCancelForm} className="style_ghost" sx={{ width: "6rem" }}>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default TextFieldsModalContent;
