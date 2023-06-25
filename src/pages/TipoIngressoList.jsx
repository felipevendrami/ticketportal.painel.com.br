import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GridTipoIngresso from "../components/grid/GridTipoIngresso.tsx"
import styles from "./TipoIngressoList.module.css";

function TipoIngressoList() {
  return (
    <>
      <h3>Ingressos do Evento</h3>
      <hr />
      <div>
        <Link to="/eventos/tipo_ingresso/novo_tipo_ingresso">
          <Button variant="success">Novo Lote</Button>{" "}
        </Link>
        <Button variant="primary">Alterar Lote</Button>{" "}
        <Button variant="info">Visualizar Lote</Button>{" "}
        <Button variant="danger">Excluir Lote</Button>{" "}
      </div>
      <hr />
      <div>
        <GridTipoIngresso />
      </div>
    </>
  );
}

export default TipoIngressoList;
