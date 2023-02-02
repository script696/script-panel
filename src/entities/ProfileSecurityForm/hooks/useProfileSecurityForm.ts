import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { VALIDATORS } from "../../../utils/constants/validators";
import { FormSecurityValues } from "../types/types";

type UseProfileSecurityForm = (initialFormValues: FormSecurityValues) => {
	formSecurityInstance: FormikProps<FormSecurityValues>;
};

const useProfileSecurityForm: UseProfileSecurityForm = (initialFormValues) => {
	const formSecurityInstance: FormikProps<FormSecurityValues> = useFormik<FormSecurityValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: (values) => {
			console.log(values);
		},
		validateOnChange: true,
		validationSchema: Yup.object({
			newPassword: VALIDATORS.password,
			oldPassword: VALIDATORS.password,
			repeatPassword: VALIDATORS.repeatPassword,
		}),
	});
	return { formSecurityInstance };
};

export default useProfileSecurityForm;
