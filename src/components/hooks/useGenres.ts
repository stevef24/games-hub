import useData from "./useData";

type FetchGenresResponse = {
	count: number;
	results: Genre[];
};

export type Genre = {
	id: number;
	name: string;
	image_background: string;
};

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
