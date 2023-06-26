import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import GridVendas from "../components/grid/GridVendas.tsx";
import { useState } from "react";

function VendasList() {
  const [pedidoId, setPedidoId] = useState(null);
  const history = useHistory();

  const handleVisualizarPedido = () => {
    history.push(`/vendas/pedido/${pedidoId}`);
  };

  const handlePedidoSelecionado = (id) => {
    setPedidoId(id);
  };

  return (
    <>
      <h3>Vendas</h3>
      <hr />
      <div>
        <Button variant="info" onClick={handleVisualizarPedido} disabled={!pedidoId}>
          Visualizar Pedido
        </Button>{" "}
      </div>
      <hr />
      <div>
        <GridVendas handlePedidoSelecionado={handlePedidoSelecionado} />
      </div>
    </>
  );
}

export default VendasList;
