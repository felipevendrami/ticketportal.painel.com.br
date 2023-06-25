import { Link } from "react-router-dom";
import React, { useState } from "react";
import { registrarTipoIngressoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NovoTipoIngresso() {

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const TipoIngresso = {
      evento: evento,
      titulo: titulo,
      lote: lote,
      qntIngressos: qntIngressos,
      valorBase: valorBase,
      desconto: desconto,
    }

    console.log(TipoIngresso);
    //registrarTipoIngressoAPI(TipoIngresso);
  }

  const [evento, setEvento] = useState("");
  const [titulo, setTitulo] = useState("");
  const [lote, setLote] = useState("");
  const [qntIngressos, setQntIngressos] = useState("");
  const [valorBase, setValorBase] = useState("");
  const [desconto, setDesconto] = useState("");

  return (
    <>
      <h3>Novo Lote</h3>
      <hr />
      <Form onSubmit={handlerSubmit}>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEvento">
            <Form.Label>Evento:</Form.Label>
            <Form.Control
              value={evento}
              id="evento"
              type="text"
              onChange={e => setEvento(e.target.value)}
              required
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTituloIngresso">
            <Form.Label>Titulo Ingresso:</Form.Label>
            <Form.Control
              value={titulo}
              id="titulo_ingresso"
              type="text"
              onChange={e => setTitulo(e.target.value)}
              minLength={3}
              maxLength={100}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumeroLote">
            <Form.Label>Número Lote:</Form.Label>
            <Form.Control
              value={lote}
              id="num_lote"
              type="number"
              onChange={e => setLote(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridQuantidade">
            <Form.Label>Quantidade Ingressos:</Form.Label>
            <Form.Control
              value={qntIngressos}
              id="qnt_ingressos"
              type="number"
              onChange={e => setQntIngressos(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridValor">
            <Form.Label>Valor Base (R$):</Form.Label>
            <Form.Control
              value={valorBase}
              id="valor"
              type="text"
              onChange={e => setValorBase(e.target.value)}
              placeholder="Insira valor monetário"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumeroDesconto">
            <Form.Label>Desconto (%):</Form.Label>
            <Form.Control
              value={desconto}
              id="desconto"
              type="number"
              onChange={e => setDesconto(e.target.value)}
              placeholder="Insira percentual de desconto"
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
