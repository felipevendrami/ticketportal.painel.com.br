import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./EventosList.module.css";
import Grid from "../components/layout/Grid.tsx";

function EventosList() {
  return (
    <>
      <h3>Seus Eventos</h3>
      <hr />
      <div>
        <Link to="/eventos/novo_evento">
          <Button variant="success">Novo Evento</Button>{" "}
        </Link>
        <Button variant="primary">Alterar Evento</Button>{" "}
        <Button variant="info">Visualizar Evento</Button>{" "}
        <Button variant="danger">Excluir Evento</Button>{" "}
        <Link to="/eventos/tipo_ingresso">
          <Button variant="secondary">Ingressos</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <Grid />
      </div>
    </>
  );
}

export default EventosList;
