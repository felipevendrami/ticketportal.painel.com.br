import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GridVendas from "../components/grid/GridVendas.tsx"
import styles from "./VendasList.module.css";

function VendasList() {
  return (
    <>
      <h3>Vendas</h3>
      <hr />
      <div>
        <Link to="/vendas/pedido">
          <Button variant="info">Visualizar Pedido</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <GridVendas />
      </div>
    </>
  );
}

export default VendasList;
