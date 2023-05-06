import styles from "./app.module.css";
import { Navbar } from "./components";
import { MyRoutes } from "./routes/myRoutes";

function App() {
	return (
		<div className={styles.container}>
			<Navbar />
			<MyRoutes />
		</div>
	);
}

export default App;
