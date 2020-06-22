import React from "react";
// import { Grid } from "@material-ui/core";
import { Scrollbars } from 'react-custom-scrollbars';
// import MUIDataTable from "mui-datatables";
import'./stafflist.css';


// components
import PageTitle from "../../components/PageTitle/PageTitle";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import Widget from "../../components/Widget/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";

// export default StaffList
// const datatableData = [
  // ["Joe James", "Example Inc.", "Yonkers", "NY"],
  // ["John Walsh", "Example Inc.", "Hartford", "CT"],
  // ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  // ["James Houston", "Example Inc.", "Dallas", "TX"],
  // ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  // ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  // ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  // ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  // ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  // ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  // ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  // ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  // ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  // ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  // ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  // ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  // ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
// ];


export default function Tables() {
  return (
    <>
      <AssignmentIcon />
      <EmojiPeopleIcon /><PageTitle title="スタッフリスト" />
      <Scrollbars style={{ width: 800, height: 350}}>
<p>佐藤テスト 男 社長 1998-04-01 1960-06-23 60 ○○大学 080-○○○○-○○○○ ○○駅 1 4 1 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>後藤テスト 男 課長 2000-04-01 1965-10-11 55 ○○大学 090-○○○○-○○○○ ○○駅 1 9 2 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>菊池テスト 男 部長 2004-04-01 1968-04-09 52 ○○大学 080-○○○○-○○○○ ○○駅 1 7 3 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>磯野テスト 女 プロデューサー 2010-04-01 1975-08-12 45 ○○大学 090-○○○○-○○○○ ○○駅 1 3 4 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>鈴木テスト 男 プロデューサー 2018-04-01 1985-08-25 35 ○○大学 080-○○○○-○○○○ ○○駅 2 5 4 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>高橋テスト 女 プロデューサー 2015-04-01 1988-11-03 32 ○○大学 090-○○○○-○○○○ ○○駅 2 2 4 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p>田中テスト 女 プロデューサー 2015-04-01 1991-05-29 29 ○○大学 080-○○○○-○○○○ ○○駅 2 6 4 1 2018-07-14 00:00:00 2020-05-10 00:00:00 佐藤</p>
<p></p>伊藤テスト', '男', 'プログラマー', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>渡邉テスト', '男', 'プログラマー', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>中村テスト', '女', 'プログラマー', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 2, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>中野テスト', '男', 'プログラマー', '1998-04-01', '1960-06-23', 60, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 4, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>田村テスト', '男', 'プログラマー', '2000-04-01', '1965-10-11', 55, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 9, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>石田テスト', '男', 'プログラマー', '2004-04-01', '1968-04-09', 52, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 7, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>安達テスト', '女', 'プログラマー', '2010-04-01', '1975-08-12', 45, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 3, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
<p></p>井上テスト', '男', 'プログラマー', '2018-04-01', '1985-08-25', 35, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 5, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[16, 'テスト佐藤', '女', 'プログラマー', '2015-04-01', '1988-11-03', 32, '○○大学', '090-○○○○-○○○○', '○○駅', 2, 2, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[17, 'テスト後藤', '女', 'リードプログラマー', '2015-04-01', '1991-05-29', 29, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 6, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[18, 'テスト菊池', '男', 'リードプログラマ', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[19, 'テスト磯野', '男', 'リードプログラマ', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[20, 'テスト鈴木', '女', 'リードプログラマ', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[21, 'テスト高橋', '男', 'リードプログラマ', '1998-04-01', '1960-06-23', 60, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 4, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[22, 'テスト田中', '男', '営業', '2000-04-01', '1965-10-11', 55, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 9, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[23, 'テスト伊藤', '男', '営業', '2004-04-01', '1968-04-09', 52, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 7, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[24, 'テスト渡邉', '女', '営業', '2010-04-01', '1975-08-12', 45, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 3, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[25, 'テスト中村', '男', '営業', '2018-04-01', '1985-08-25', 35, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 5, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[26, 'テスト中野', '女', '営業', '2015-04-01', '1988-11-03', 32, '○○大学', '090-○○○○-○○○○', '○○駅', 2, 2, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[27, 'テスト田村', '女', '営業', '2015-04-01', '1991-05-29', 29, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 6, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[28, 'テスト石田', '男', '営業', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[29, 'テスト安達', '男', '営業', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
[30, 'テスト井上', '女', '営業', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 7, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'],
  </Scrollbars>
      {/* <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable */}
            {/* // title="スタッフリスト"
            // data={datatableData}
            // columns={["Id", "Name", "Gender", "Position", "Joining_Day", "Birthday", "Age", "School_Career", "Phone_Number", "Near_Staition", "Company_Id", "Area_Id", "Occupattion_Id", "Employment_System_Id", "Entry_At", "Update_At", "Update_By"]}
            // options={{ */}
              {/* // filterType: "checkbox",
            // }}
          /> */}
        {/* </Grid> */}
        {/* <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      {/* </Grid> */}
    </>
  );
}