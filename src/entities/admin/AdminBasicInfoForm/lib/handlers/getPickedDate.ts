import { FormikProps } from "formik";

import { BasicInfoForm } from "../../types/types";

export const getPickedDate = (value: any, formInstance: FormikProps<BasicInfoForm>) => {
	if (!value) return;
	const { $D: day, $M: month, $y: year } = value;
	formInstance.setFieldValue("dateOfBirth", `0${day}.0${month}.${year}`);
};
