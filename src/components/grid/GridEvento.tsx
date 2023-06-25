import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";

function GridEvento(eventos) {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "evento", headerName: "Evento", width: 275 },
    { field: "local", headerName: "Local", width: 275 },
    { field: "data", headerName: "Data", width: 150 },
  ];

  /*const rows = 
    eventos.map((evento) => (
      {
        id: evento.idEvento,
        evento: evento.titulo,
        local: evento.local,
        data: evento.dataEvento,
      }
    ));*/

  return (
    <div style={{ height: "100%", width: "100%" }}>
    </div>
  );
}

export default GridEvento;
