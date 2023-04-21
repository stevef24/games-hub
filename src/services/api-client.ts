import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "52c373d6fec84155a9b8ab6b6faf7f93",
	},
});
