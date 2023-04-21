import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav" bg="gray.800">
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" bg="gray.200">
					aside
				</GridItem>
			</Show>
			<GridItem area="main" bg="gray.300">
				main
			</GridItem>
		</Grid>
	);
}

export default App;
