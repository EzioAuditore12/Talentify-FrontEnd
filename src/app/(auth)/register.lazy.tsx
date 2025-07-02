import { Link, createLazyFileRoute } from "@tanstack/react-router";

// ui components
import { Card, CardContent } from "@/components/ui/card";
import { Stack } from "@/components/ui/layout/stack";
import { Muted, P } from "@/components/ui/typography";

// registeration components
import {
	AuthRegister,
	RegisterBanner,
	RegisterationForm,
} from "@/modules/auth/register/components";

// hook
import { useRegisterationForm } from "@/modules/auth/register/hooks";

export const Route = createLazyFileRoute("/(auth)/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const { trigger, isMutating, error } = useRegisterationForm();

	return (
		<div className="min-h-svh flex flex-col justify-center items-center p-2 w-full">
			<Card className="overflow-hidden p-0 w-full max-w-4xl">
				<CardContent className="grid p-0 md:grid-cols-2">
					<Stack className="p-6 md:p-8 " spacing={"md"}>
						<RegisterationForm handleSubmit={trigger} isLoading={isMutating} />

						{error && <P className="text-red-500 text-center">{error}</P>}

						<Muted className="text-center">Or Continue With</Muted>

						<AuthRegister />

						<div className="text-center text-sm">
							Already have an account?{" "}
							<Link to="/login" className="underline underline-offset-4">
								Log In
							</Link>
						</div>
					</Stack>
					<RegisterBanner />
				</CardContent>
			</Card>
		</div>
	);
}
