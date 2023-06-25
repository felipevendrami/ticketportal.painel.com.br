import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "cliente", headerName: "Cliente", width: 250 },
  { field: "data", headerName: "Data Venda", width: 150 },
  { field: "valor", headerName: "Valor Total", width: 100 },
  { field: "situacao", headerName: "Situação", width: 200 },
];

const rows: GridRowsProp = [
  {
    id: "1",
    cliente: "Fulano de Tal Teste",
    data: "20/08/2022 14:55",
    valor: "150,00",
    situacao: "Pagamento Confirmado",
  },
];

function GridEvento() {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <DataGrid 
        rows={rows} 
        columns={columns}
        checkboxSelection
        initialState={{
            pagination: {
                paginationModel: { pageSize: 6, page: 1 },
            }
        }}
        />
    </div>
  );
}

export default GridEvento;
