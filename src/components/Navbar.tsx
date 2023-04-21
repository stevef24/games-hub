import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
	return (
		<HStack justifyContent="space-between" padding="1rem">
			<Image src={logo} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
