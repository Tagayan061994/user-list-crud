import * as React from "react";
import * as Styled from "./styled";
import FetchProfileActionBtn from "./ActionBtn";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: false,
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
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      return <FetchProfileActionBtn userId={params.id} />;
    },
  },
];

export const DataTable = React.memo((props) => {
  const { userData, selectedItemsAction, isCheckboxSelection = true } = props;
  return (
    <Styled.DataTableConatiner>
      <DataGrid
        pageSize={5}
        rows={userData}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection={isCheckboxSelection}
        onSelectionModelChange={(ids) => selectedItemsAction(ids)}
      />
    </Styled.DataTableConatiner>
  );
});

export default DataTable;
