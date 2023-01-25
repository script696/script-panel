import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { FormInfoValues } from "../../types/types";
import { VALIDATORS } from "../../../../utils/constants/validators";

type UseInfoEditForm = ({ initialFormValues }: any) => {
	formInfoInstance: FormikProps<FormInfoValues>;
};

const useProfileInfoForm: UseInfoEditForm = ({ initialFormValues }) => {
	const formInfoInstance: FormikProps<FormInfoValues> = useFormik<FormInfoValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: (values) => {
			console.log(values);
			// handleUpdateProfile(values);
		},
		validateOnChange: true,
		validationSchema: Yup.object({
			fullName: VALIDATORS.fullName,
			nickName: VALIDATORS.nickName,
			phoneNumber: VALIDATORS.phoneNumber,
		}),
	});
	return { formInfoInstance };
};

export default useProfileInfoForm;
