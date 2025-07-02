import { authStore } from "@/store";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)")({
	component: RouteComponent,
	beforeLoad: () => {
		if (!authStore.getState().user) {
			throw redirect({
				to: "/login",
			});
		}
	},
});

function RouteComponent() {
	return <Outlet />;
}
