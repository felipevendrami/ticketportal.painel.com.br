import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "evento", headerName: "Evento", width: 275 },
  { field: "local", headerName: "Local", width: 275 },
  { field: "data", headerName: "Data", width: 150 },
  { field: "lotes", headerName: "Lotes", width: 10 },
];

const rows: GridRowsProp = [
  {
    id: 1,
    evento: "FarolNegro",
    local: "TortugasBar - Rio do Sul / SC",
    data: "31/12/2023",
    lotes: "1",
  },
];

function Grid() {
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

export default Grid;
