import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { FormAddressValues } from "../../types/types";
import { VALIDATORS } from "../../../../utils/constants/validators";

type UseAddressInfoForm = ({ initialFormValues, onSubmit }: any) => {
	formAddressInstance: FormikProps<FormAddressValues>;
};

const useAddressInfoForm: UseAddressInfoForm = ({ initialFormValues, onSubmit }) => {
	const formAddressInstance: FormikProps<FormAddressValues> = useFormik<FormAddressValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: onSubmit,
		validateOnChange: true,
		validationSchema: Yup.object({
			addressLine: VALIDATORS.addressLine,
			apartment: VALIDATORS.apartment,
			city: VALIDATORS.city,
			country: VALIDATORS.country,
		}),
	});
	return { formAddressInstance };
};

export default useAddressInfoForm;
