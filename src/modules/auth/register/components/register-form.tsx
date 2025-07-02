import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/layout/stack";
import { H2, Muted } from "@/components/ui/typography";
import { useAppForm } from "@/lib/use-app-form";
import { cn } from "@/lib/utils";

//schema
import { registerUserObject, registerUserSchema } from "../schemas";

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

export function RegisterationForm({
	className,
	handleSubmit,
	isLoading,
}: RegisterationFormProps) {
	const RegisterForm = useAppForm({
		defaultValues: registerUserObject,
		validators: { onChange: registerUserSchema },
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
				RegisterForm.handleSubmit();
			}}
		>
			<Stack justify="center" align="center">
				<H2 className="font-bold">Join Us On Talentify</H2>
				<Muted>Register to your Talentify account</Muted>
			</Stack>

			<RegisterForm.AppField name="email">
				{(field) => (
					<field.TextField
						className="mt-2"
						placeholder="name@example.com"
						type="email"
					/>
				)}
			</RegisterForm.AppField>

			<RegisterForm.AppField name="password">
				{(field) => <field.TextField type="password" />}
			</RegisterForm.AppField>

			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Registering..." : "Register"}
			</Button>
		</form>
	);
}
