import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getTodasComprasAPI } from "../../Api/Service";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "cliente", headerName: "Cliente", width: 250 },
  { field: "data", headerName: "Data Venda", width: 250 },
  { field: "valor", headerName: "Valor Total", width: 150 },
  { field: "situacao", headerName: "Situação", width: 200 },
];

function GridVendas({ handlePedidoSelecionado }) {
  const [rows, setRows] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    getTodasComprasAPI(token)
      .then((response) => {
        const data = response.data.map((compra, index) => ({
          id: compra.id || index,
          cliente: compra.usuario.nome,
          data: new Date(compra.dataCompra).toLocaleTimeString("pt-BR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          valor: compra.valorTotal,
          situacao: compra.situacao,
        }));
        setRows(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRowClick = (params) => {
    const pedidoId = params.row.id+1;
    handlePedidoSelecionado(pedidoId);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowClick={handleRowClick}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

export default GridVendas;
