import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch } from "react-redux";

import React from "react";

import { ModalPopup, setIsModalPopupOpen } from "../../../modules/ModalPopup";

import ProfileInfoRow from "./ProfileInfoRow";
import ProfileInfoEditForm from "./ProfileInfoEditForm";

type ProfileInfoData = {
	title: string;
	text: string;
};

type ProfileInfoProps = {
	profileInfoData: Array<ProfileInfoData>;
};

const ProfileInfo = ({ profileInfoData }: ProfileInfoProps) => {
	const dispatch = useDispatch();

	const handleClickEditMode = () => {
		dispatch(setIsModalPopupOpen(true));
	};
	return (
		<>
			<Typography component="h3" variant="h3" alignSelf="start">
				Personal Information
			</Typography>
			<Typography component="span" variant="subtitle1" alignSelf="start" mb={2}>
				Basic info, like your name and address, that you use on platform.
			</Typography>
			<Box sx={{ width: "100%" }}>
				<Box
					display="flex"
					justifyContent="space-between"
					sx={{
						background: "#fff",
						borderRadius: "3px",
						boxSizing: "border-box",
						height: "20px",
					}}
					pl={2}
				>
					<Typography component="span" variant="subtitle1" className="color_secondary">
						Basics
					</Typography>
					<Button
						className="button_styles_none"
						sx={{ color: "#0d1b2a", textTransform: "none" }}
						onClick={handleClickEditMode}
					>
						<Typography component="span" variant="subtitle1" mr={0.5} className="color_secondary">
							Edit
						</Typography>
						<EditIcon sx={{ fontSize: "0.8rem" }} />
					</Button>
				</Box>
				{profileInfoData.map(({ title, text }) => {
					return <ProfileInfoRow key={title} title={title} text={text} />;
				})}
			</Box>
			<ModalPopup modalPopupContent={ProfileInfoEditForm} />
		</>
	);
};

export default ProfileInfo;
