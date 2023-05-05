import { useQuery } from "@apollo/client";
import {
	GET_ALL_JERSEYS,
	GET_ALL_NUMBERS_JERSEYS,
} from "./hooks/useApolloClient";

import styles from "./app.module.css";
import { Card } from "./components/Card/Card";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";

function App() {
	const { data, loading, error } = useQuery(GET_ALL_JERSEYS, {
		variables: {
			team: "Barcelona",
		},
	});

	// const {
	// 	data: dataNumber,
	// 	loading: loadingNumber,
	// 	error: errorNumber,
	// } = useQuery(GET_ALL_NUMBERS_JERSEYS);

	if (error) <ErrorMessage msg={error.message} />;
	if (loading) return <Loader />;

	return (
		<>
			<h1 className={styles.title}>messi jerseys</h1>
			<div className={styles.container}>
				{data.getAllJerseys.map(({ id, title, url, season, type }) => (
					<Card
						key={id}
						title={title}
						url={url}
						season={season}
						type={type}
					/>
				))}
			</div>
		</>
	);
}

export default App;
