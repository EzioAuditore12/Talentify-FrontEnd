import { axiosInstance } from "@/services/axiosInstance";

export interface RegisterUserProps {
	email: string;
	password: string;
}

export interface RegisterUserApiResponse {
	user: {
		uuid: string;
		email: string;
		username: string;
		fullName: string;
		profileImage: string;
		isProfileInfoSet: boolean;
		createdAt: string;
	};
	token: string;
	message: string;
}

export async function registerUserAPI(
	url: string,
	{ arg }: { arg: { email: string; password: string } },
) {
	const response = await axiosInstance.post<RegisterUserApiResponse>(url, {
		email: arg.email,
		password: arg.password,
	});

	return response.data;
}
