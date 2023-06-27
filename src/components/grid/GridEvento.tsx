import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";

function GridEvento({ eventos, onEventoSelecionado }) {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "evento", headerName: "Evento", width: 275 },
    { field: "local", headerName: "Local", width: 275 },
    { field: "data", headerName: "Data", width: 200 },
  ];

  const rows: GridRowsProp = eventos.map((evento) => ({
    id: evento.idEvento,
    evento: evento.titulo,
    local: evento.local,
    //data: evento.dataEvento,
    data: new Date(evento.dataEvento).toLocaleTimeString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  }));

  const handleEventoSelection = (params) => {
    const eventoSelecionado = params.row;
    onEventoSelecionado(eventoSelecionado);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowClick={handleEventoSelection}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

export default GridEvento;
