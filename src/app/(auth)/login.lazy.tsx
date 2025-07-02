import { Link, createLazyFileRoute } from "@tanstack/react-router";

// ui components
import { Card, CardContent } from "@/components/ui/card";
import { Stack } from "@/components/ui/layout/stack";
import { Muted, P } from "@/components/ui/typography";

// registeration components
import {
	AuthLogin,
	LoginBanner,
	LoginForm,
} from "@/modules/auth/login/components";

// hook
import { useLoginForm } from "@/modules/auth/login/hooks";

export const Route = createLazyFileRoute("/(auth)/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const { trigger, isMutating, error } = useLoginForm();

	return (
		<div className="min-h-svh flex flex-col justify-center items-center p-2 w-full">
			<Card className="overflow-hidden p-0 w-full max-w-4xl">
				<CardContent className="grid p-0 md:grid-cols-2">
					<Stack className="p-6 md:p-8 " spacing={"md"}>
						<LoginForm handleSubmit={trigger} isLoading={isMutating} />

						{error && <P className="text-red-500 text-center">{error}</P>}

						<Muted className="text-center">Or Continue With</Muted>

						<AuthLogin />

						<div className="text-center text-sm">
							Don't have an account?{" "}
							<Link to="/register" className="underline underline-offset-4">
								Sign Up
							</Link>
						</div>
					</Stack>
					<LoginBanner />
				</CardContent>
			</Card>
		</div>
	);
}
