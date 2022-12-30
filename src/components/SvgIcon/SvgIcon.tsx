import { createSvgIcon, SvgIcon } from "@mui/material";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";

const HomeIcon = createSvgIcon(
  <path d="M45.12,1,154.25,0V214.16h-45V45.26H0ZM8.2,68.12H53l.14,146H8.06ZM19.34,203H41.89V79.25H19.34Zm101.22,0H143V11.43l-93.17.73L27.54,34h93Z" />,
  "Home"
);

const SvgIconTest = () => {
  return (
    <SvgIcon>
      <LogoSvg width={25} height={25} />
    </SvgIcon>
  );
};

export default SvgIconTest;
