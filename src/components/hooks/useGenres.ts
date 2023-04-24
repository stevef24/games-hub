import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

type FetchGenresResponse = {
	count: number;
	results: Genre[];
};

type Genre = {
	id: number;
	name: string;
};

const useGenres = () => {
	const [genreList, setGenreList] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchGenresResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenreList(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setIsLoading(true);
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { genreList, error, isLoading };
};

export default useGenres;
