import { Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { registrarTipoIngressoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

function NovoTipoIngresso() {

  const { id } = useParams();
  const [evento, setEvento] = useState("");
  const history = useHistory();

  useEffect(() => {
      console.log(localStorage.getItem("token"));
      axios.create({
          baseURL: "http://localhost:8080/",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .get(`/eventos/${id}`)
        .then((response) => {
          setEvento(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const tipoIngresso = {
      evento: evento,
      titulo: titulo,
      loteNumero: lote,
      quantidade: qntIngressos,
      valorNormal: valorBase,
      desconto: desconto,
    };

    /* EXEMPLO DE ENVIO CORRETO:
      {
    "evento": {
      "idEvento": 1,
      "usuario": {
        "idUsuario": 1,
        "nome": "Usuario 1",
        "documento": null,
        "username": null,
        "telefone": null,
        "endereco": null,
        "tipo": null,
        "password": null
      },
      "dataEvento": null,
      "titulo": null,
      "descricao": null,
      "local": null,
      "cidade": null,
      "uf": null,
      "imagemPath": null
    },
    "titulo": "Lote Promocional",
    "valorNormal": 50.00,
    "quantidade": 10,
    "desconto": null,
    "loteNumero": 1
  }
    */
/*
    try {
      const response = await registrarTipoIngressoAPI(tipoIngresso, token);
    } catch (error) {
      console.log("Error:", error);
    }*/

    registrarTipoIngressoAPI(tipoIngresso, token)
    .then(() => {
      history.push(`/eventos/tipo_ingresso/${id}`);
    })
    .catch((error) => {
      // Tratar erros na criação do evento
      console.error(error);
    });

  };

  const [titulo, setTitulo] = useState("");
  const [lote, setLote] = useState("");
  const [qntIngressos, setQntIngressos] = useState("");
  const [valorBase, setValorBase] = useState("");
  const [desconto, setDesconto] = useState("");

  return (
    <>
      <h3>Novo Lote</h3>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEvento">
            <Form.Label>Evento:</Form.Label>
            <Form.Control
              value={evento.titulo}
              id="evento"
              type="text"
              onChange={(e) => setEvento(e.target.value)}
              required
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTituloIngresso">
            <Form.Label>Título Ingresso:</Form.Label>
            <Form.Control
              value={titulo}
              id="titulo_ingresso"
              type="text"
              onChange={(e) => setTitulo(e.target.value)}
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
              onChange={(e) => setLote(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridQuantidade">
            <Form.Label>Quantidade Ingressos:</Form.Label>
            <Form.Control
              value={qntIngressos}
              id="qnt_ingressos"
              type="number"
              onChange={(e) => setQntIngressos(e.target.value)}
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
              onChange={(e) => setValorBase(e.target.value)}
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
              onChange={(e) => setDesconto(e.target.value)}
              placeholder="Insira percentual de desconto"
              required
            />
          </Form.Group>
        </Row>
        <Link to={`/eventos/tipo_ingresso/${id}`}>
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
