import { Button } from "@/components/ui/button";
import { H1, H2, P } from "@/components/ui/typography";
import { router } from "@/lib/router";
import { authStore } from "@/store";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { user, authTokens, logoutUser } = authStore.getState();
	return (
		<div className="min-h-svh flex flex-col justify-center items-center">
			<H1>User email is: {user?.email}</H1>
			<H2>User fullname : {user?.fullName}</H2>
			<P className="break-all">
				User access token is : {authTokens?.access_token}
			</P>

			<Button
				onClick={() => {
					logoutUser();
					router.navigate({ to: "/login", replace: true });
				}}
			>
				Logout User
			</Button>

			<Link to="/profile"> Go to profile page</Link>
		</div>
	);
}
