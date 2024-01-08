import axios from "lib/axios";
import { UserData } from "types/Auth";
import { getToken } from "utils/getToken";

interface UserFormData {
	username: string;
	password: string;
}

export const getMe = async () => {
	const token = getToken();

	const path = `/auth/me`;
	const result = await axios.get(path, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result.data;
};

export const authLogin = async (props: UserFormData): Promise<UserData> => {
	const path = `/auth/login`;
	const result = await axios.post(path, props);
	return result.data;
};

export const authRegister = async (props: UserFormData): Promise<UserData> => {
	const path = `/auth/register`;
	const result = await axios.post(path, props);
	return result.data;
};
