import { NavLink } from "react-router-dom";
import Messi from "../../assets/messi.svg";
import styles from "./navbar.module.css";

const teams = [
	{ name: "Argentina", id: 1 },
	{ name: "Barcelona", id: 2 },
	{ name: "Paris Saint-Germain", id: 3 },
];

export const Navbar = () => {
	// window to 0,0
	const handleClick = () => window.scrollTo(0, 0);

	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<NavLink onClick={handleClick} to="/" className={styles.link}>
					<img className={styles.image} src={Messi} alt="messi" />
				</NavLink>
				<ul className={styles.ul}>
					{teams.map((team) => (
						<NavLink
							onClick={handleClick}
							className={`${styles.link}
									 ${({ isActive }) => (isActive ? styles.active : "")}
							`}
							to={`/jerseys/${team.name}`}
							key={team.id}>
							{team.name}
						</NavLink>
					))}
				</ul>
			</nav>
		</header>
	);
};
