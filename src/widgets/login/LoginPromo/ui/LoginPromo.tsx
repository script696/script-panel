import SvgLoader from "../../../../shared/ui/SvgLoader/ui/SvgLoader";
import { ReactComponent as LoginPromoSvg } from "../../../../app/assets/svg/information.svg";
import { useAppSelector } from "../../../../shared/lib/hooks";

const LoginPromo = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	return <SvgLoader size="22rem" svg={LoginPromoSvg} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />;
};

export default LoginPromo;
