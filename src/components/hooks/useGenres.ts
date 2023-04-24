import useData from "./useData";

type FetchGenresResponse = {
	count: number;
	results: Genre[];
};

export type Genre = {
	id: number;
	name: string;
};

const useGenres = () => useData<Genre>("/Genre");

export default useGenres;
