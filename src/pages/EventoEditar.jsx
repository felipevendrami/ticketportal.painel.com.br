import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getEventoAPI } from "../Api/Service";
import EventoForm from "../components/EventoForm";

function EventoEditar() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    getEventoAPI(id)
      .then((response) => {
        setEvento(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleCancel = () => {
    // Lógica de cancelar a edição do evento aqui
  };

  const handleSubmit = () => {
    // Lógica de submissão do evento editado aqui
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
