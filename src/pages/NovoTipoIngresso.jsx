import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NovoTipoIngresso() {
  return (
    <>
      <h3>Novo Lote</h3>
      <hr />
      <Form>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEvento">
            <Form.Label>Evento:</Form.Label>
            <Form.Control
              name="evento"
              id="evento"
              type="text"
              required
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTituloIngresso">
            <Form.Label>Titulo Ingresso:</Form.Label>
            <Form.Control
              name="titulo_ingresso"
              id="titulo_ingresso"
              type="text"
              minLength={3}
              maxLength={100}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumeroLote">
            <Form.Label>Número Lote:</Form.Label>
            <Form.Control
              name="num_lote"
              id="num_lote"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridQuantidade">
            <Form.Label>Quantidade Ingressos:</Form.Label>
            <Form.Control
              name="qnt_ingressos"
              id="qnt_ingressos"
              type="number"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridValor">
            <Form.Label>Valor (R$):</Form.Label>
            <Form.Control
              name="valor"
              id="valor"
              type="text"
              placeholder="Insira valor monetário"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumeroDesconto">
            <Form.Label>Desconto (R$):</Form.Label>
            <Form.Control
              name="desconto"
              id="desconto"
              type="text"
              placeholder="Insira valor monetário"
              required
            />
          </Form.Group>
        </Row>
        <Link to="/eventos/tipo_ingresso">
          <Button variant="warning">Voltar</Button>{" "}
        </Link>
        <Button variant="success" type="submit">
          Confirmar
        </Button>
      </Form>
    </>
  );
}

export default NovoTipoIngresso;
