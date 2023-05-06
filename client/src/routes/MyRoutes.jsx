import React from "react";
import { Route, Routes } from "react-router-dom";
import { JerseysContainer } from "../components";

export const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<JerseysContainer />} />
			<Route path="/jerseys/:teamId" element={<JerseysContainer />} />
			<Route path="*" element={<>404</>} />
		</Routes>
	);
};
