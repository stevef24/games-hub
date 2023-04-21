import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box width="300px" borderRadius="8px" overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
