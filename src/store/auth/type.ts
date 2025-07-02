export type authTokens = {
	access_token: string;
};

export type UserDetails = {
	email: string;
	userProfileImage: string;
	fullName: string;
};

export interface authStoreType {
	authTokens: authTokens | null;
	user: UserDetails | null;
	setAuthTokens: (access_token: string) => void;
	setUserDetails: (data: UserDetails) => void;
	getAuthToken: () => void;
	logoutUser: () => void;
}
