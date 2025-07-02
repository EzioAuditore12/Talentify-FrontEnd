import { RouterProvider, createRouter } from "@tanstack/react-router";

//TailwindCSS imports
import "./index.css";

import { SWRConfig } from "swr";
//SWR implementations
import { fetcher } from "./services/axiosInstance";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return (
		<SWRConfig value={{ fetcher }}>
			<RouterProvider router={router} />
		</SWRConfig>
	);
}
