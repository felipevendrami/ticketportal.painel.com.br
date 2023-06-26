import styles from "./PedidoItem.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import axios from "axios";

function PedidoItem(args) {

  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/itemcompras`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data.filter((item) => item.compra.idCompra == args.compraid - 1);
        console.log(data);
        setPedido(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
            value={pedido?.quantidade}
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
            value={pedido?.valorItem}
          />
          </Form.Group>
      </Row>
    </div>
  );
}

export default PedidoItem;
