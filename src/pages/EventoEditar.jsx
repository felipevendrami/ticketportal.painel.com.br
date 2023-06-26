import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getEventoAPI } from "../Api/Service";
import EventoForm from "../components/EventoForm";
import axios from "axios";

function EventoEditar() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    axios
      .create({
        baseURL: "http://localhost:8080/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .get(`/eventos/${id}`)
      .then((response) => {
        setEvento(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleCancel = () => {
  };

  const handleSubmit = () => {
    
  };

  if (!evento) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <EventoForm
        titulo={evento.titulo}
        capaEvento={evento.capaEvento}
        descricao={evento.descricao}
        local={evento.local}
        data={evento.data}
        cidade={evento.cidade}
        uf={evento.uf}
        horario={evento.horario}
        onChange={() => {}}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}

export default EventoEditar;
