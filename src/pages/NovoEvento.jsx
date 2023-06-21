import { Link } from "react-router-dom";
import styles from "./NovoEvento.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NovoEvento() {
  return (
    <>
      <h3>Novo Evento</h3>
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitulo">
            <Form.Label>Título:</Form.Label>
            <Form.Control type="text" minLength={5} maxLength={100} required/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control rows={6} as="textarea" minLength={15} maxLength={250} required/>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridLocal">
            <Form.Label>Local:</Form.Label>
            <Form.Control type="text" minLength={5} required/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridData">
            <Form.Label>Data:</Form.Label>
            <Form.Control type="date" required/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control type="text" minLength={5} required/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUF">
            <Form.Label>UF:</Form.Label>
            <Form.Control type="text" minLength={2} maxLength={2} required/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridHora">
            <Form.Label>Horário:</Form.Label>
            <Form.Control type="time" required/>
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