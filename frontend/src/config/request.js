import axios from "axios";
import { localStorageAction } from "./localstorage";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const sendRequest = async ({
	method = "GET",
	route,
	body,
	includeHeaders = true,
}) => {
	if (!route) throw Error("URL required");

	const headers = includeHeaders
		? {
				Authorization: `Bearer ${localStorageAction("token")}`,
				"Content-Type": "multipart/form-data",
		  }
		: {};

	try {
		const response = await axios.request({
			method,
			url: route,
			data: body,
			headers,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
};
