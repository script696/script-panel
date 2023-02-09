import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { FormInfoValues } from "../../types/types";
import { VALIDATORS } from "../../../../shared/lib/constants/validators";

type UseBasicInfoForm = ({ initialFormValues, onSubmit }: any) => {
	formInfoInstance: FormikProps<FormInfoValues>;
};

const useBasicInfoForm: UseBasicInfoForm = ({ initialFormValues, onSubmit }) => {
	const formInfoInstance: FormikProps<FormInfoValues> = useFormik<FormInfoValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: onSubmit,
		validateOnChange: true,
		validationSchema: Yup.object({
			fullName: VALIDATORS.fullName,
			nickName: VALIDATORS.nickName,
			phoneNumber: VALIDATORS.phoneNumber,
		}),
	});
	return { formInfoInstance };
};

export default useBasicInfoForm;
