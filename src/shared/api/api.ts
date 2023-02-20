import axios from "axios";

import { AUTH_ENDPOINTS, BASE_URL } from "./constants/api_endpoints";
import { ACCESS_TOKEN } from "./constants/app_constants";

const $api = axios.create({
	baseURL: "http://api.1259923-cj57908.tw1.ru/api",
	withCredentials: true,
});

const refresh = async () =>
	await axios.get<{ accessToken: string }>(`${BASE_URL}/${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.REFRESH}`, {
		withCredentials: true,
	});

$api.interceptors.request.use(
	(config) => {
		if (config.headers) {
			const token = localStorage.getItem(ACCESS_TOKEN);
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await refresh();
				localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
				return $api.request(originalRequest);
			} catch (e) {
				localStorage.removeItem(ACCESS_TOKEN);
			}
		}
		throw error;
	},
);

export default $api;
