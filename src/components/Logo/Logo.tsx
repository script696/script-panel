import Box, { BoxProps } from "@mui/material/Box";
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

type LogoProps = {
  colored?: boolean;
  size: number;
} & BoxProps;

const Logo = ({ colored = false, size, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <LogoSvg height={size} width={size} />
    </Box>
  );
};

export default Logo;
