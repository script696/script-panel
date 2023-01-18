import { SUPPORTED_PICTURE_FORMATS } from "../constants/constants";

export const ERRORS = {
  PASSWORD:
    "Password should contain uppercase and lowercase letters, have at least one digit and be longer than 7 characters",
  PICTURE: `Only the following formats are accepted: ${SUPPORTED_PICTURE_FORMATS.join(
    " ",
  )}`,
};
