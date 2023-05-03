import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomApolloProvider } from "./hooks/useApolloClient";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CustomApolloProvider>
			<App />
		</CustomApolloProvider>
	</React.StrictMode>
);
