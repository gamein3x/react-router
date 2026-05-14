import { NavLink } from "react-router";
import styles from "../styles/Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navContainer}>
            <NavLink
                to=""
                className={({ isActive }) => isActive ? styles.linkActive : styles.link}
            >
                HOME
            </NavLink>
            <NavLink
                to="about"
                className={({ isActive }) => isActive ? styles.linkActive : styles.link}
            >
                ABOUT US
            </NavLink>
            <NavLink
                to="products"
                className={({ isActive }) => isActive ? styles.linkActive : styles.link}
            >
                OUR PRODUCTS
            </NavLink>
            <NavLink
                to="*"
                className={({ isActive }) => isActive ? styles.linkActive : styles.link}
            >
                LOSE YOURSELF
            </NavLink>
        </div>
    )
};

export default Navbar;