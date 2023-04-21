import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
	const [gameList, setGameList] = useState<Game[]>([]);
	const [error, setError] = useState("");

	type Game = {
		id: number;
		name: string;
	};

	type FetchGamesResponse = {
		count: number;
		results: Game[];
	};

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>("/games")
			.then((res) => {
				setGameList(res.data.results);
			})
			.catch((err) => setError(err.message));
	}, []);

	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{gameList.map((game) => (
					<li key={game.id}> {game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
