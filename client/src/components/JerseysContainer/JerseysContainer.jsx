import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ErrorMessage, Loader } from "../";
import { useJerseys } from "../../hooks/useJerseys";
import styles from "./jerseysContainer.module.css";

export const JerseysContainer = () => {
	const { teamId } = useParams();
	const { myData, loading, error } = useJerseys({ query: teamId });

	if (error) return <ErrorMessage msg={error.message} />;
	if (loading) return <Loader />;
	return (
		<div className={styles.container}>
			{myData.map(({ id, title, url, season, type }) => (
				<Card
					key={id}
					title={title}
					url={url}
					season={season}
					type={type}
				/>
			))}
		</div>
	);
};
