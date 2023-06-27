import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { getTodosTiposIngressoAPI } from "../../Api/Service";
import { getEventoAPI } from "../../Api/Service";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "idTipoIngresso", headerName: "ID", width: 10 },
  { field: "titulo", headerName: "Titulo", width: 300 },
  { field: "valorNormal", headerName: "Valor Normal", width: 300 },
  { field: "quantidade", headerName: "Quantidade", width: 110 },
];

function GridTipoIngresso(args) {
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [evento, setEvento] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const responseEv = await getEventoAPI(args.eventoid, token);
        setEvento(responseEv.data);

        const response = await getTodosTiposIngressoAPI(token);
        const data = response.data.filter(
          (row) => row.evento.idEvento == args.eventoid
        );
        const dataWithId = data.map((row, index) => ({
          id: index + 1,
          ...row,
        }));
        setRows(dataWithId);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

export default GridTipoIngresso;
