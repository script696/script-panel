import Box, { BoxProps } from "@mui/material/Box";
import { ElementType } from "react";

type LogoProps = {
	color?: string;
	size: number | string;
	svg: ElementType;
} & BoxProps;

const SvgLoader = ({ color, size, svg: Svg, ...boxProps }: LogoProps) => {
	return (
		<Box {...boxProps}>
			<Svg height={size} width={size} style={{ fill: color }} />
		</Box>
	);
};

export default SvgLoader;
