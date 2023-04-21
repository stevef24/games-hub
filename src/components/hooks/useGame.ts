import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export type Platform = {
	id: number;
	name: string;
	slug: string;
};

export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
};

type FetchGamesResponse = {
	count: number;
	results: Game[];
};

const useGames = () => {
	const [gameList, setGameList] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setGameList(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setIsLoading(true);
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { gameList, error, isLoading };
};

export default useGames;
