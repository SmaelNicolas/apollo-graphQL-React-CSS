import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomApolloProvider } from "./hooks/useApolloClient";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CustomApolloProvider>
			<div className="app">
				<App />
			</div>
		</CustomApolloProvider>
	</React.StrictMode>
);
