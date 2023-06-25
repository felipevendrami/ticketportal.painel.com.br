import { Link } from "react-router-dom";
import React, { useState } from "react";
import { registrarEventoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NovoEvento() {
  
  const handlerSubmit = async (event) => {
    event.preventDefault();

    const Evento = {
      titulo: titulo,
      capaEvento: capaEvento,
      descricao: descricao,
      data: data + " " + horario,
      local: {
        local: local,
        cidade: cidade,
        uf: uf,
      },
    };

    registrarEventoAPI(Evento);
  };

  // States
  const [titulo, setTitulo] = useState("");
  const [capaEvento, setCapaEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [horario, setHorario] = useState("");

  return (
    <>
      <h3>Novo Evento</h3>
      <hr />
      <Form onSubmit={handlerSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitulo">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              value={titulo}
              id="titulo"
              type="text"
              onChange={e => setTitulo(e.target.value)}
              minLength={5}
              maxLength={100}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formFile" className="mb-3">
            <Form.Label>Capa do Evento:</Form.Label>
            <Form.Control value={capaEvento} id="capaEvento" type="file" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              value={descricao}
              id="descricao"
              rows={6}
              as="textarea"
              onChange={e => setDescricao(e.target.value)}
              minLength={15}
              maxLength={250}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridLocal">
            <Form.Label>Local:</Form.Label>
            <Form.Control
              value={local}
              id="local"
              type="text"
              onChange={e => setLocal(e.target.value)}
              minLength={5}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridData">
            <Form.Label>Data:</Form.Label>
            <Form.Control
              value={data}
              id="data"
              type="date"
              onChange={e => setData(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              value={cidade}
              id="cidade"
              type="text"
              onChange={e => setCidade(e.target.value)}
              minLength={5}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUF">
            <Form.Label>UF:</Form.Label>
            <Form.Control
              value={uf}
              id="uf"
              type="text"
              onChange={e => setUf(e.target.value)}
              minLength={2}
              maxLength={2}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridHora">
            <Form.Label>Horário:</Form.Label>
            <Form.Control
              value={horario}
              id="horario"
              type="time"
              onChange={e => setHorario(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Link to="/eventos">
          <Button variant="warning">Voltar</Button>{" "}
        </Link>
        <Button variant="success" type="submit">
          Confirmar
        </Button>
      </Form>
    </>
  );
}

export default NovoEvento;
