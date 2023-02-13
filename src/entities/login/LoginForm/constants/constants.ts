import { VALIDATORS } from "../../../../shared/lib/constants/validators";
import { CREDENTIALS_MOCK } from "../../../../shared/lib/mocks/mocks";

export const INITIAL_FORM_VALUES = {
	email: CREDENTIALS_MOCK.email,
	password: CREDENTIALS_MOCK.password,
};

export const VALIDATION_SCHEMA = {
	email: VALIDATORS.email,
	password: VALIDATORS.password,
};
