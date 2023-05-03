import styles from "./card.module.css";
export const Card = ({ title, url, season, type }) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<img className={styles.image} src={url} alt={title} />
			<div className={styles.season}>Season: {season}</div>
			<div className={styles.type}>Type: {type}</div>
		</div>
	);
};
