import type { FileRouteTypes } from "@/routeTree.gen";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

interface LogoProps {
	linkTo: FileRouteTypes["to"];
	title: string;
    /*TODO: Need to find a good icon for logo or image
	 icon:TablerIcon */  
	isOpen: boolean;
}

const Logo = ({ title, linkTo, isOpen }: LogoProps) => {
	return (
		<Link
			to={linkTo}
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
		>
			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ 
					opacity: 1,
					display: isOpen ? "inline-block" : "inline-block"
				}}
				className="font-medium whitespace-pre text-black dark:text-white"
			>
				{title}
			</motion.span>
		</Link>
	);
};

export { Logo, type LogoProps };
