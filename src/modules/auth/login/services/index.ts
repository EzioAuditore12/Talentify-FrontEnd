import { axiosInstance } from "@/services/axiosInstance";

export interface LoginUserProps {
	email: string;
	password: string;
}

export interface LoginUserApiResponse {
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

export async function loginUserAPI(
	url: string,
	{ arg }: { arg: { email: string; password: string } },
) {
	const response = await axiosInstance.post<LoginUserApiResponse>(url, {
		email: arg.email,
		password: arg.password,
	});

	return response.data;
}
