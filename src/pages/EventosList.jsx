import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodosEventosAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import styles from "./EventosList.module.css";
import GridEvento from "../components/grid/GridEvento.tsx";

function EventosList() {
  const [eventos, setEventos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      return;
    }

    function atualizaListaEventos() {
      getTodosEventosAPI()
        .then((response) => {
          setEventos(response.data);
          console.log(eventos);
        })
        .catch((erro) => console.log(erro));
    }

    atualizaListaEventos();
  }, []); 

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
        <GridEvento eventos={eventos} />
      </div>
    </>
  );
}

export default EventosList;
