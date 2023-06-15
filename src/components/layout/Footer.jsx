import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../imgs/TicketPortal-transp.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img className={styles.img} src={logo} alt="TickerPortal.logo" />
      </Link>
      <p>
        <span>TicketPortal</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
