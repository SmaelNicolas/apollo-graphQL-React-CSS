import { NavLink } from "react-router-dom";
import Afa from "../../assets/afa.png";
import Barca from "../../assets/bc.png";
import Messi from "../../assets/messi.svg";
import Psg from "../../assets/psg.svg";
import styles from "./navbar.module.css";

const teams = [
	{ link: "Argentina", id: 1, img: Afa },
	{ link: "Barcelona", id: 2, img: Barca },
	{ link: "Paris Saint-Germain", id: 3, img: Psg },
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
							className={styles.link}
							to={`/jerseys/${team.link}`}
							key={team.id}>
							<img
								className={styles.team}
								src={team.img}
								alt="messi"
							/>
						</NavLink>
					))}
				</ul>
			</nav>
		</header>
	);
};
