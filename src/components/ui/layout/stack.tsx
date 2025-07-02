import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { type ComponentProps } from "react";

const stackStyles = cva("flex", {
	variants: {
		direction: {
			vertical: "flex-col",
			horizontal: "flex-row",
		},
		spacing: {
			none: "gap-0",
			xs: "gap-1",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-6",
			xl: "gap-8",
		},
		verticalSpacing: {
			none: "gap-y-0",
			xs: "gap-y-1",
			sm: "gap-y-2",
			md: "gap-y-4",
			lg: "gap-y-6",
			xl: "gap-y-8",
		},
		horizontalSpacing: {
			none: "gap-x-0",
			xs: "gap-x-1",
			sm: "gap-x-2",
			md: "gap-x-4",
			lg: "gap-x-6",
			xl: "gap-x-8",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch",
		},
		justify: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
		},
		wrap: {
			true: "flex-wrap",
			false: "flex-nowrap",
		},
	},
	defaultVariants: {
		direction: "vertical",
		wrap: false,
	},
});

type StackProps = ComponentProps<"div"> & VariantProps<typeof stackStyles>;
function Stack({
	className,
	direction,
	spacing,
	verticalSpacing,
	horizontalSpacing,
	align,
	justify,
	wrap,
	children,
	...props
}: StackProps) {
	return (
		<div
			className={cn(
				stackStyles({
					direction,
					spacing,
					verticalSpacing,
					horizontalSpacing,
					align,
					justify,
					wrap,
				}),
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export { Stack, type StackProps };
