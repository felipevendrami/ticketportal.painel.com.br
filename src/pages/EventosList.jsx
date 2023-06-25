import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import { retornaTodosEventosAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import styles from "./EventosList.module.css";
import GridEvento from "../components/grid/GridEvento.tsx";

function EventosList() {

  const [eventos, setEventos] = useState([]);

  function atualizaListaEventos(){
    retornaTodosEventosAPI()
    .then((response) => {
      setEventos(response.data);
    })
    .catch((erro) => console.log(erro));
  }

  useEffect(() => atualizaListaEventos(),[eventos]);
  
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
        <GridEvento eventos={eventos}/>
      </div>
    </>
  );
}

export default EventosList;
