import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function EventoForm({ titulo, capaEvento, descricao, local, data, cidade, uf, horario, onChange, onSubmit, onCancel }) {
  return (
    <>
      <h3>Evento</h3>
      <hr />
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitulo">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              value={titulo}
              id="titulo"
              type="text"
              onChange={onChange}
              minLength={5}
              maxLength={100}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formFile" className="mb-3">
            <Form.Label>Capa do Evento:</Form.Label>
            <Form.Control
              value={capaEvento}
              id="capaEvento"
              type="file"
              onChange={onChange}
            />
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              required
            />
          </Form.Group>
        </Row>
        <Link to="/eventos">
          <Button variant="warning" onClick={onCancel}>
            Cancelar
          </Button>{" "}
        </Link>
        <Button variant="success" type="submit">
          Confirmar
        </Button>
      </Form>
    </>
  );
}

export default EventoForm;
