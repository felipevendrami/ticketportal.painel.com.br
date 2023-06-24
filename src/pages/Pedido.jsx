import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PedidoItem from "../components/layout/PedidoItem";

function Pedido() {
  return (
    <>
      <h3>Pedido: [num_pedido]</h3>
      <hr />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCliente">
          <Form.Label>Cliente:</Form.Label>
          <Form.Control
            name="cliente"
            id="cliente"
            type="text"
            disabled
            readOnly
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridData">
            <Form.Label>Data Compra:</Form.Label>
            <Form.Control
              name="data_compra"
              id="data_compra"
              type="date"
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSituacao">
            <Form.Label>Situação:</Form.Label>
            <Form.Control
              name="situacao"
              id="situacao"
              type="text"
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridValorTotal">
            <Form.Label>Valor Total:</Form.Label>
            <Form.Control
              name="valor_total"
              id="valor_total"
              type="text"
              disabled
              readOnly
            />
          </Form.Group>
      </Row>
      <hr />
      <h3>Ingressos:</h3>
      <div>
        <PedidoItem />
      </div>
      <Link to="/vendas">
        <Button variant="warning">Voltar</Button>{" "}
      </Link>
    </>
  );
}

export default Pedido;
