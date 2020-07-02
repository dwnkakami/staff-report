import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import "./Search.css";

// components
//import PageTitle from "../../components/PageTitle";

const datatableData = [
  ["ディレクター"],
  ["プログラマ"],
  ["サポート"],
  ["その他"],
];

export default function StaffSearch() {
  return (
    <>
      {/* <PageTitle title="スタッフ検索" /> */}
      <Grid  container spacing={4}>
        <Grid className='sheet' item xs={12}>
          <MUIDataTable row
            title="スタッフ検索"
            data={datatableData}
            columns={["職種"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}