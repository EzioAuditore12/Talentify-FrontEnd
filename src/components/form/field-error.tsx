import { type AnyFieldMeta } from "@tanstack/react-form";
import { type ComponentProps } from "react";
import { ZodError } from "zod";

type FieldErrorProps = {
	meta: AnyFieldMeta;
} & ComponentProps<"p">;

export const FieldError = ({ meta, className, ...props }: FieldErrorProps) => {
	if (!meta.isTouched) {
		return null;
	}
	return meta.errors.map(({ message }: ZodError, index) => (
		<p key={index} className="text-red-500" {...props}>
			{message}
		</p>
	));
};
