import axios from "axios";
import { getLocalStorage } from "utils/localStorage";

const url = import.meta.env.VITE_PORT;

const instance = axios.create({
	baseURL: url,
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = getLocalStorage("token");

	return config;
});

export default instance;
