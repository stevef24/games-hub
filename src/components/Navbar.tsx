import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<HStack padding="1rem">
			<Image src={logo} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
