import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Header.module.css";
import logo from "../../imgs/TicketPortal-transp.png";

function Header() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img className={styles.img} src={logo} alt="TickerPortal.logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Header;
