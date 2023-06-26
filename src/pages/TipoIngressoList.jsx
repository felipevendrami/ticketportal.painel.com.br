import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GridTipoIngresso from "../components/grid/GridTipoIngresso.tsx"

function TipoIngressoList(selecionado) {
  console.log(selecionado);

  return (
    <>
      <h3>Ingressos do Evento</h3>
      <hr />
      <div>
        <Link to="/eventos/tipo_ingresso/novo_tipo_ingresso">
          <Button variant="success">Novo Lote</Button>{" "}
        </Link>
        <Link to={`/eventos/tipo_ingresso/alterar_tipo_ingresso/${selecionado.id}`}>
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
          eventoselecionado={selecionado}
        />
      </div>
    </>
  );
}

export default TipoIngressoList;
