import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { getTodosTiposIngressoAPI } from "../../Api/Service";

const columns: GridColDef[] = [
  { field: "idTipoIngresso", headerName: "ID", width: 10 },
  { field: "evento.idEvento", headerName: "Evento ID", width: 150 },
  { field: "evento.titulo", headerName: "Evento", width: 250 },
  { field: "titulo", headerName: "Titulo", width: 250 },
  { field: "valorNormal", headerName: "Valor Normal", width: 110 },
  { field: "quantidade", headerName: "Quantidade", width: 110 },
  { field: "desconto", headerName: "Desconto", width: 110 },
  { field: "loteNumero", headerName: "Número do Lote", width: 150 },
];

function GridTipoIngresso(eventoselecionado) {
  const [rows, setRows] = React.useState<GridRowsProp>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await getTodosTiposIngressoAPI(token,eventoselecionado);
        const dataWithId = response.data.map((row, index) => ({
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
        checkboxSelection
        autoHeight
      />
    </div>
  );
}

export default GridTipoIngresso;