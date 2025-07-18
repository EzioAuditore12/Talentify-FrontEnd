import { z } from "zod";

export const loginUserSchema = z.object({
	email: z
		.string()
		.email("Please enter a valid email")
		.min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type registerUserType = z.infer<typeof loginUserSchema>;

export const loginUserObject: registerUserType = {
	email: "",
	password: "",
};
