import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import EventoPrevia from "../components/layout/EventoPrevia";
import EventPage from "./EventoPage";
import Container from "../components/layout/Container";

function HomePage() {
  return (
    <section className={styles.section}>
      <h2>Principais eventos</h2>
      <hr />
      <div className={styles.eventos}>
        <Container customClass="min-height">
          <Link className={styles.a} to="/evento">
            <EventoPrevia />
          </Link>
          <Link className={styles.a} to="/evento">
            <EventoPrevia />
          </Link>
          <Link className={styles.a} to="/evento">
            <EventoPrevia />
          </Link>
          <Link className={styles.a} to="/evento">
            <EventoPrevia />
          </Link>
          <Link className={styles.a} to="/evento">
            <EventoPrevia />
          </Link>
        </Container>
      </div>
    </section>
  );
}

export default HomePage;
