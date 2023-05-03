import styles from "./errorMessage.module.css";
export const ErrorMessage = ({ msg }) => {
	return <div className={styles.container}>{msg}</div>;
};
