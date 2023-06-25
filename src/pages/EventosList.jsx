import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodosEventosAPI, deletarEventoAPI } from "../Api/Service";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./EventosList.module.css";
import GridEvento from "../components/grid/GridEvento.tsx";

function EventosList() {
  const [eventos, setEventos] = useState([]);
  const history = useHistory();
  const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      return;
    }

    function atualizaListaEventos() {
      getTodosEventosAPI()
        .then((response) => {
          setEventos(response.data);
          console.log(eventos);
        })
        .catch((erro) => console.log(erro));
    }

    atualizaListaEventos();
  }, []);

  const deletarEvento = () => {
    if (eventoSelecionado) {
      deletarEventoAPI(eventoSelecionado.id)
        .then((response) => {
          console.log("Evento deletado com sucesso!");
          setShowDeleteModal(false);
          // Atualize a lista de eventos após a exclusão, se necessário
        })
        .catch((error) => {
          console.log("Erro ao deletar o evento:", error);
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
        <Button variant="primary" onClick={() => console.log("Alterar Evento")}>
          Alterar Evento
        </Button>{" "}
        <Button variant="info" onClick={() => console.log("Visualizar Evento")}>
          Visualizar Evento
        </Button>{" "}
        <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
          Excluir Evento
        </Button>{" "}
        <Link to="/eventos/tipo_ingresso">
          <Button variant="secondary">Ingressos</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <GridEvento eventos={eventos} onEventoSelecionado={setEventoSelecionado} />
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
            Não
          </Button>
          <Button variant="danger" onClick={deletarEvento}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventosList;
