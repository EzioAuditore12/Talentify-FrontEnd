import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../storage";
import type { authStoreType } from "./type";

export const authStore = create<authStoreType>()(
	persist(
		(set, get) => ({
			authTokens: null,
			user: null,
			setAuthTokens: (access_token) => {
				set({ authTokens: { access_token: access_token } });
			},
			setUserDetails: (data) => {
				set({
					user: {
						email: data.email,
						fullName: data.fullName,
						userProfileImage: data.userProfileImage,
					},
				});
			},
			getAuthToken: () => {
				return get().authTokens;
			},
			logoutUser: () => {
				set({ authTokens: null, user: null });
			},
		}),
		{
			name: "talentify-auth",
			storage: createJSONStorage(() => zustandStorage),
		},
	),
);
