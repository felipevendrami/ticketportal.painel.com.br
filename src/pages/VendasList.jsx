import { Link } from "react-router-dom";
import styles from "./VendasList.module.css";
import Grid from "../components/layout/Grid.tsx";
import Button from "react-bootstrap/Button";

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
        <Grid />
      </div>
    </>
  );
}

export default VendasList;
