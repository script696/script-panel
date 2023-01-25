import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { FormAddressValues } from "../../types/types";
import { VALIDATORS } from "../../../../utils/constants/validators";

type UseAddressInfoForm = ({ initialFormValues }: any) => {
	formAddressInstance: FormikProps<FormAddressValues>;
};

const useInfoAddressEditForm: UseAddressInfoForm = ({ initialFormValues }) => {
	const formAddressInstance: FormikProps<FormAddressValues> = useFormik<FormAddressValues>({
		enableReinitialize: true,
		initialValues: initialFormValues,
		onSubmit: (values) => {
			console.log(values);
			// handleUpdateProfile(values);
		},
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

export default useInfoAddressEditForm;
