import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GridTipoIngresso from "../components/grid/GridTipoIngresso.tsx"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function TipoIngressoList() {

  const { id } = useParams();

  return (
    <>
      <h3>Ingressos do Evento</h3>
      <hr />
      <div>
        <Link to={`/eventos/tipo_ingresso/${id}/novo_tipo_ingresso`}
        idEvento={id}>
          <Button variant="success">Novo Lote</Button>{" "}
        </Link>
        <Link to={`/eventos/tipo_ingresso/alterar_tipo_ingresso/`}>
          <Button variant="primary">Alterar Lote</Button>{" "}
        </Link>
        <Link to="/eventos/tipo_ingresso/visualizar_tipo_ingresso">
          <Button variant="primary">Visualizar Lote</Button>{" "}
        </Link>
        <Link to="/eventos/tipo_ingresso/excluir_tipo_ingresso">
        <Button variant="danger">Excluir Lote</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <GridTipoIngresso 
        eventoid= {id}
        />
      </div>
    </>
  );
}

export default TipoIngressoList;
