import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
				<GridItem area="aside">
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
