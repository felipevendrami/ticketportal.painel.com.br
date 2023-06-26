import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PedidoItem from "../components/layout/PedidoItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "@mui/material";

function Pedido() {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/compras/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = ({
          id: response.data.id,
          cliente: response.data.usuario.nome,
          data: new Date(response.data.dataCompra).toLocaleTimeString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          valor: response.data.valorTotal,
          situacao: response.data.situacao,
        });
        setPedido(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <h3>Pedido:</h3>
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
            value={pedido?.cliente}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridData">
          <Form.Label>Data Compra:</Form.Label>
          <Form.Control
            name="data_compra"
            id="data_compra"
            disabled
            readOnly
            value={pedido?.data}
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
            value={pedido?.situacao}
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
            value={pedido?.valor}
          />
        </Form.Group>
      </Row>
      <hr />
      <h3>Ingressos:</h3>
      <div>
        <PedidoItem 
        compraid={id}
        />
      </div>
      <Link to="/vendas">
        <Button variant="warning">Voltar</Button>{" "}
      </Link>
    </>
  );
}

export default Pedido;
