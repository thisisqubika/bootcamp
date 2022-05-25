import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      |
      <Link className={styles.link} to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
