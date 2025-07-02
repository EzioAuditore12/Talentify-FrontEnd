import { authStore } from "@/store";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
	component: RouteComponent,
	beforeLoad: () => {
		if (authStore.getState().user) {
			throw redirect({
				to: "/",
			});
		}
	},
});

function RouteComponent() {
	return <Outlet />;
}
