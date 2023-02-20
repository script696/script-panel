import { Box, Link, Typography } from "@mui/material";

type FooterProps = {
	classNames?: Array<string>;
};

const Footer = ({ classNames }: FooterProps) => {
	const classes = classNames ? classNames.join(" ") : "";

	return (
		<Box
			component="footer"
			display="flex"
			justifyContent="space-between"
			px={4}
			py={2}
			width="100%"
			sx={{ boxSizing: "border-box" }}
		>
			<Typography component="p" variant="subtitle1" className={`${classes}`}>
				© 2023 Nik Semenov, made with love for a better web
			</Typography>
			<Box display="flex" columnGap="0.6rem">
				<Link
					href="https://github.com/script696"
					target="_blank"
					sx={{ textDecoration: "none" }}
					className={`${classes}`}
				>
					GitHub
				</Link>
				<Link
					href="https://spb.hh.ru/resume/0893424dff0b1c42f00039ed1f677746693762"
					target="_blank"
					sx={{ textDecoration: "none" }}
					className={`${classes}`}
				>
					Resume
				</Link>
				<Link
					href="https://t.me/script696"
					target="_blank"
					sx={{ textDecoration: "none" }}
					className={`${classes}`}
				>
					Telegram
				</Link>
			</Box>
		</Box>
	);
};

export default Footer;
