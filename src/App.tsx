import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav" bg="gray.100">
				nav
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
