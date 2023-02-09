import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { VALIDATORS } from "../../../shared/lib/constants/validators";
import { ChangePasswordValues } from "../types/types";

type UseChangePasswordForm = ({ initialFormValues, onSubmit }: any) => {
	formSecurityInstance: FormikProps<ChangePasswordValues>;
};

const useChangePasswordForm: UseChangePasswordForm = ({ initialFormValues, onSubmit }) => {
	const formSecurityInstance: FormikProps<ChangePasswordValues> = useFormik<ChangePasswordValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: onSubmit,
		validateOnChange: true,
		validationSchema: Yup.object({
			newPassword: VALIDATORS.password,
			oldPassword: VALIDATORS.password,
			repeatPassword: VALIDATORS.repeatPassword,
		}),
	});
	return { formSecurityInstance };
};

export default useChangePasswordForm;
