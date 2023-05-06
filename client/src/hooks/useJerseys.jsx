import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ALL_JERSEYS, GET_ALL_NUMBERS_JERSEYS } from "../queries/queries";

export const useJerseys = ({ query }) => {
	const [myData, setMyData] = useState([]);

	const { data, loading, error } = useQuery(GET_ALL_JERSEYS, {
		variables: {
			team: query,
		},
	});

	useEffect(() => {
		if (data) {
			setMyData(data.getAllJerseys);
		}
	}, [data]);

	return { myData, loading, error };
};
