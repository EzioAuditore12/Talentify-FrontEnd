import { CustomBackendError } from "@/lib/axiosError";
import { router } from "@/lib/router";
import { authStore } from "@/store";
import useSWRMutation from "swr/mutation";
import { registerUserAPI } from "../services";

export function useRegisterationForm() {
	const { trigger, isMutating, error } = useSWRMutation(
		"/api/auth/register",
		registerUserAPI,
		{
			onSuccess: (data) => {
				authStore.getState().setAuthTokens(data.token);
				authStore.getState().setUserDetails({
					email: data.user.email,
					userProfileImage: data.user.profileImage,
					fullName: data.user.fullName,
				});
				router.navigate({ to: "/", replace: true });
			},
		},
	);

	const errorMessage = error ? CustomBackendError.getErrorMessage(error) : "";

	return {
		error: errorMessage,
		trigger,
		isMutating,
	};
}
