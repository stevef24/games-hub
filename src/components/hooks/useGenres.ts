import genre from "../../data/genre";
type FetchGenresResponse = {
	count: number;
	results: Genre[];
};

export type Genre = {
	id: number;
	name: string;
	image_background: string;
};

const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
