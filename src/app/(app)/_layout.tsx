import { authStore } from "@/store";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { IconDashboard, IconUser } from "@tabler/icons-react";
import { useState} from "react";

import { Logo } from "@/modules/layout/logo";
import { MenuBar, type AppMenuItems } from "@/modules/layout/menu-bar";

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

const AppMenuItemsDetails: AppMenuItems[] = [
	{
		label: "Home",
		to: "/",
		icon: IconDashboard,
	},
	{
		label: "Profile",
		to: "/profile",
		icon: IconUser,
	},
];

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const {user}=authStore.getState()
  
  return (
	<MenuBar
	  Logo={<Logo title="Talentify" linkTo="/" isOpen={open} />}
	  MenuItems={AppMenuItemsDetails}
	  isOpen={open}
	  setIsOpen={setOpen}
	  userDetails={user ? {
		username: user.fullName,
		linkUserProfileTo: "/profile",
		userImageURL: user.userProfileImage,
	  } : undefined}
	  Outlet={<Outlet />}
	/>
  );
}