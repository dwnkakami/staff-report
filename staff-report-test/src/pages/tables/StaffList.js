import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Grid, ServerStyleSheets, Table } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Widget from "../../src/components/Widget/Widget";

import mock from "../dashboard/mock";

export default function Tables() {
    return (
        <>
        <PageTitle title="スタッフレポート" />
        <Grid container spacing={4}>
            <Grid item xs={10}>
                <MUIDataTable
                  title="スタッフリスト"
                  data={ServerStyleSheets}
                  />
            </Grid>
        <Grid item xs={10}>
            <Widget title="Material-UI Table" upperTitle noBodyPadding>
                <Table data={mock.table} />
            </Widget>
        </Grid>
        </Grid>
    </>
    );
}