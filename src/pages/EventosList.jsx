import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodosEventosAPI, deletarEventoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./EventosList.module.css";
import GridEvento from "../components/grid/GridEvento.tsx";
import axios from "axios";

function EventosList() {
  const [eventos, setEventos] = useState([]);
  const history = useHistory();
  const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      history.push("/login");
      return;
    }

    function atualizaListaEventos() {
      console.log(localStorage.getItem("token"));
      axios.create({
        baseURL: "http://localhost:8080/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }).get(`/eventos`)
        
        .then((response) => {
          setEventos(response.data);
          console.log(eventos);
        })
        .catch((erro) => console.log(erro));
    }

    atualizaListaEventos();
  }, []);

  const deletarEvento = () => {
    const token = localStorage.getItem("token");
    if (eventoSelecionado) {
      deletarEventoAPI(eventoSelecionado.id, token)
        .then((response) => {
          console.log("Evento deletado com sucesso!");
          setShowDeleteModal(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            setShowErrorModal(true);
          } else {
            console.log("Erro ao deletar o evento:", error);
          }
        });
    }
  };

  return (
    <>
      <h3>Seus Eventos</h3>
      <hr />
      <div>
        <Link to="/eventos/novo_evento">
          <Button variant="success">Novo Evento</Button>{" "}
        </Link>
        <Link to={`/eventos/${eventoSelecionado?.id}/editar`}>
          <Button variant="primary">Alterar Evento</Button>{" "}
        </Link>
        <Link to={`/eventos/${eventoSelecionado?.id}`}>
          <Button variant="info">Visualizar Evento</Button>{" "}
        </Link>
        <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
          Excluir Evento
        </Button>{" "}
        <Link to={`/eventos/tipo_ingresso/${eventoSelecionado?.id}`}>
          <Button variant="secondary">Ingressos</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <GridEvento
          eventos={eventos}
          onEventoSelecionado={setEventoSelecionado}
        />
      </div>

      {/* Pop-up de confirmação de exclusão */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja deletar esse evento? Todos os ingressos, vendas e pedidos relacionados a ele serão deletados.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deletarEvento}>
            Sim, Deletar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Pop-up de erro */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Não foi possível deletar o evento, pois ainda existem relações com ele. Delete-as antes de deletar esse evento.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventosList;
