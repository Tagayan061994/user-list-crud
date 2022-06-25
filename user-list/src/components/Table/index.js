import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: false,
    click: () => {
      console.log("clicked");
    },
  },
  {
    field: "login",
    headerName: "Login",
    width: 150,
    editable: false,
  },
  {
    field: "node_id",
    headerName: "Node_id",
    type: "string",
    width: 110,
    editable: false,
  },
  {
    field: "url",
    headerName: "Url",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const DataTable = (props) => {
  const { userData } = props;
  console.log("3333333333", userData);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={(
          params: GridCellParams,
          event: MuiEvent<React.MouseEvent>
        ) => {
          event.defaultMuiPrevented = true;
          console.log("sss", params);
        }}
        components={{
          s: <div>dmkdmkmdk </div>,
        }}
      />
    </div>
  );
};
