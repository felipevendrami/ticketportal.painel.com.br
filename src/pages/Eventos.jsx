import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./Eventos.module.css";
import Grid from "../components/layout/Grid.tsx";

function Eventos(props) {
  return (
    <>
      <h3>Seus Eventos: {props.nome}</h3>
      <hr />
      <div className={styles.div_acoes}>
        <Link to="/eventos/novo_evento">
          <Button variant="success">Novo Evento</Button>{" "}
        </Link>
        <Button variant="primary">Alterar Evento</Button>{" "}
        <Button variant="info">Visualizar Evento</Button>{" "}
        <Button variant="danger">Excluir Evento</Button>{" "}
        <Link to="/eventos/tipo_ticket">
          <Button variant="secondary">Tickets</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <Grid />
      </div>
    </>
  );
}

export default Eventos;
