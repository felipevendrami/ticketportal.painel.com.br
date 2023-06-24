import styles from "./PedidoItem.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function PedidoItem() {
  return (
    <div className={styles.item}>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Evento:</Form.Label>
          <Form.Control
            name="evento"
            id="evento"
            type="text"
            disabled
            readOnly
          />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Quantidade:</Form.Label>
          <Form.Control
            name="quantidade"
            id="quantidade"
            type="text"
            disabled
            readOnly
          />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Desconto:</Form.Label>
          <Form.Control
            name="desconto"
            id="desconto"
            type="text"
            disabled
            readOnly
          />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Total:</Form.Label>
          <Form.Control
            name="total"
            id="total"
            type="text"
            disabled
            readOnly
          />
          </Form.Group>
      </Row>
    </div>
  );
}

export default PedidoItem;
