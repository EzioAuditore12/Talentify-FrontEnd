import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const imageVariants = cva("max-w-full h-auto", {
	variants: {
		rounded: {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			full: "rounded-full",
		},
		fit: {
			cover: "object-cover",
			contain: "object-contain",
			fill: "object-fill",
			none: "object-none",
			"scale-down": "object-scale-down",
		},
	},
	defaultVariants: {
		rounded: "none",
		fit: "cover",
	},
});

export interface ImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		VariantProps<typeof imageVariants> {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ className, rounded, fit, ...props }, ref) => {
		return (
			<img
				className={cn(imageVariants({ rounded, fit, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Image.displayName = "Image";

export { Image, imageVariants };
