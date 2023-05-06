import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CustomApolloProvider } from "./hooks/useApolloClient";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<CustomApolloProvider>
				<App />
			</CustomApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);
