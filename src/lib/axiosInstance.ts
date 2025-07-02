import { authStore } from "@/store";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const access_token = authStore.getState().authTokens?.access_token;
		if (access_token) {
			config.headers.Authorization = `Bearer ${access_token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

export default axiosInstance;
