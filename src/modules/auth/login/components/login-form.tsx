import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/layout/stack";
import { H2, Muted } from "@/components/ui/typography";
import { useAppForm } from "@/lib/use-app-form";
import { cn } from "@/lib/utils";

//schema
import { loginUserObject, loginUserSchema } from "../schemas";

/**
 * Registeration Form
 *
 * Features:
 * 1. Renders a registeration form with “username” and “password” fields.
 * 2. Uses `useAppForm` for schema-based validation.
 * 3. Applies default values from `loginUserObject`.
 * 4. On submit, logs `{ username, password }` to the console.
 *
 * Usage:
 *   <RegisterationForm />
 */
interface RegisterationFormProps {
	className?: string;
	handleSubmit: ({
		email,
		password,
	}: { email: string; password: string }) => void;
	isLoading?: boolean;
}

export function LoginForm({
	className,
	handleSubmit,
	isLoading,
}: RegisterationFormProps) {
	const LoginForm = useAppForm({
		defaultValues: loginUserObject,
		validators: { onChange: loginUserSchema },
		onSubmit: ({ value }) => {
			handleSubmit(value);
		},
	});

	return (
		<form
			className={cn(
				"flex flex-col gap-4 justify-center items-center",
				className,
			)}
			onSubmit={(e) => {
				e.preventDefault();
				LoginForm.handleSubmit();
			}}
		>
			<Stack justify="center" align="center">
				<H2 className="font-bold">Login To Your account</H2>
				<Muted>Login To Your Talentify account</Muted>
			</Stack>

			<LoginForm.AppField name="email">
				{(field) => (
					<field.TextField
						className="mt-2"
						placeholder="name@example.com"
						type="email"
					/>
				)}
			</LoginForm.AppField>

			<LoginForm.AppField name="password">
				{(field) => <field.TextField type="password" />}
			</LoginForm.AppField>

			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Logging In..." : "Login"}
			</Button>
		</form>
	);
}
