import Box, { BoxProps } from "@mui/material/Box";

import { ReactComponent as LogoSvg } from "../../app/assets/svg/logo.svg";

type LogoProps = {
	color?: string;
	size: number;
} & BoxProps;

const Logo = ({ color, size, ...boxProps }: LogoProps) => {
	return (
		<Box {...boxProps}>
			<LogoSvg height={size} width={size} style={{ fill: color }} />
		</Box>
	);
};

export default Logo;
