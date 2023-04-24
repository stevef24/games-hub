import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

type fetchResponse<T> = {
	count: number;
	results: T[];
};

type Genre = {
	id: number;
	name: string;
};

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() => {
			const controller = new AbortController();

			apiClient
				.get<fetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setIsLoading(true);
					setError(err.message);
				});

			return () => controller.abort();
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;
