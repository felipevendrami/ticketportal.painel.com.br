import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "evento", headerName: "Evento", width: 250 },
  { field: "titulo", headerName: "Titulo", width: 250 },
  { field: "valor", headerName: "Valor Total", width: 100 },
  { field: "qnt_ingressos", headerName: "Qnt. Ingressos", width: 110 },
  { field: "num_lote", headerName: "Núm. Lote", width: 110 },
];

const rows: GridRowsProp = [
  {
    id: "1",
    evento: "FarolNegro",
    titulo: "Lote Promocional",
    valor: "50,00",
    qnt_ingressos: "10",
    num_lote: "1",
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
