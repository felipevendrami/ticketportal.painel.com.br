import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getTipoIngressoAPI, atualizarTipoIngressoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function EditarTipoIngresso() {
  const { idTipoIngresso } = useParams();
  const [tipoIngresso, setTipoIngresso] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [lote, setLote] = useState("");
  const [qntIngressos, setQntIngressos] = useState("");
  const [valorBase, setValorBase] = useState("");
  const [desconto, setDesconto] = useState("");

  useEffect(() => {
    const buscarTipoIngresso = async () => {
      try {
        const response = await getTipoIngressoAPI(idTipoIngresso);
        setTipoIngresso(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    buscarTipoIngresso();
  }, [idTipoIngresso]);

  useEffect(() => {
    if (tipoIngresso) {
      setTitulo(tipoIngresso.titulo);
      setLote(tipoIngresso.lote);
      setQntIngressos(tipoIngresso.qntIngressos);
      setValorBase(tipoIngresso.valorBase);
      setDesconto(tipoIngresso.desconto);
    }
  }, [tipoIngresso]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const tipoIngressoAtualizado = {
      id: tipoIngresso.id,
      titulo: titulo,
      lote: lote,
      qntIngressos: qntIngressos,
      valorBase: valorBase,
      desconto: desconto,
    };

    try {
      const response = await atualizarTipoIngressoAPI(tipoIngressoAtualizado);
      console.log(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {tipoIngresso ? (
        <>
          <h3>Editar Lote</h3>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTitulo">
                <Form.Label>Título:</Form.Label>
                <Form.Control
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLote">
                <Form.Label>Lote:</Form.Label>
                <Form.Control
                  type="text"
                  value={lote}
                  onChange={(e) => setLote(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridQntIngressos">
                <Form.Label>Quantidade de Ingressos:</Form.Label>
                <Form.Control
                  type="text"
                  value={qntIngressos}
                  onChange={(e) => setQntIngressos(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridValorBase">
                <Form.Label>Valor Base:</Form.Label>
                <Form.Control
                  type="text"
                  value={valorBase}
                  onChange={(e) => setValorBase(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDesconto">
                <Form.Label>Desconto:</Form.Label>
                <Form.Control
                  type="text"
                  value={desconto}
                  onChange={(e) => setDesconto(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Atualizar Lote
            </Button>{" "}
            <Link to={`/eventos/tipo_ingresso`}>
              <Button variant="secondary">Cancelar</Button>{" "}
            </Link>
          </Form>
        </>
      ) : (
        <p>Carregando lote...</p>
      )}
    </>
  );
}

export default EditarTipoIngresso;
