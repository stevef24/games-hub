import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
	onSearch: (searchText: string) => void;
};

const Navbar = ({ onSearch }: Props) => {
	return (
		<HStack padding="1rem">
			<Image src={logo} />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
