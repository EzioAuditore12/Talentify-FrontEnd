import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { TablerIcon } from "@tabler/icons-react";
import type { FileRouteTypes } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import type {
	ComponentProps,
	Dispatch,
	ReactNode,
	SetStateAction,
} from "react";

interface AppMenuItems {
	label: string;
	to: FileRouteTypes["to"];
	icon: TablerIcon;
}

export type { AppMenuItems };

interface UserDetails {
    username: string | undefined,
    userImageURL: string | undefined,
    linkUserProfileTo: FileRouteTypes["to"]
}


interface MenubarProps extends ComponentProps<"aside"> {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	Logo: ReactNode;
	MenuItems: AppMenuItems[];
	Outlet: ReactNode;
    userDetails?: UserDetails
}

export function MenuBar({
	isOpen,
	setIsOpen,
	Logo,
	MenuItems,
	Outlet,
    userDetails,
    className,
    ...props
}: MenubarProps) {
	return (
		<aside
			className={cn(
				"mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
				"h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
			className)}
            {...props}
		>
			<Sidebar open={isOpen} setOpen={setIsOpen}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{Logo}
						<div className="mt-8 flex flex-col gap-2">
							{MenuItems.map((link, idx) => (
								<SidebarLink
									key={idx}
									as={Link}
									link={{
										label: link.label,
										to: link.to,
										icon: <link.icon className="h-5 w-5 shrink-0" />,
									}}
								/>
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							as={Link}
							link={{
								label: userDetails?.username ?? "Guest",
								to: userDetails?.linkUserProfileTo ?? "/profile",
								icon: userDetails?.userImageURL ? (
									<img
										src={userDetails.userImageURL}
										className="h-7 w-7 shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								) : (
									<div className="h-7 w-7 shrink-0 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
										{userDetails?.username?.charAt(0)?.toUpperCase() ?? "G"}
									</div>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
				{Outlet}
		</aside>
	);
}
