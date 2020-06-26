import React from "react";
// import { Grid } from "@material-ui/core";
import { Scrollbars } from 'react-custom-scrollbars';
// import MUIDataTable from "mui-datatables";
import'./stafflist.css';



// components
import PageTitle from "../../components/PageTitle/PageTitle";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import { makeStyles } from "@material-ui/core";
// import Widget from "../../components/Widget/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";

// const useStyles = makeStyles({
//   root: {
//     overflowX: "auto",
//     whiteSpace: "nowrap"
//   },
//   table: {
//     tableLayout: "fixed"
//   }
// });

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
      <EmojiPeopleIcon />
      <PageTitle title="スタッフリスト" />
      <Scrollbars style={{ width: 800, height: 350}}>
        <table class="staff" border= "border-solid">
            <tr>
            <th>Id</th><th>Name</th><th>Gender</th><th>Position</th><th>Joining_Day</th><th>Birthday</th><th>Age</th><th>School_Career</th><th>Phone_Number</th><th>Near_Staition</th><th>Company_Id</th><th>Area_Id</th><th>Occupattion_Id</th><th>Employment_System_Id</th><th>Entry_At</th><th>Update_At</th><th>Update_By</th>
            </tr>

            <tr>
            <td>1</td><td>佐藤テスト</td><td>男</td><td>社長</td><td>1998-04-01</td><td>1960-06-23</td><td>60</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>4</td><td>1</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>
            <tr>
            <td>2</td><td>後藤テスト</td><td>男</td><td>課長</td><td>2000-04-01</td><td>1965-10-11</td><td>55</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>9</td><td>2</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>
            <tr>
            <td>3</td><td>菊池テスト</td><td>男</td><td>部長</td><td>2004-04-01</td><td>1968-04-09</td><td>52</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>7</td><td>3</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>4</td><td>磯野テスト</td><td>女</td><td>プロデューサー</td><td>2010-04-01</td><td>1975-08-12</td><td>45</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>3</td><td>4</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>              
            </tr>

            <tr>
            <td>5</td><td>鈴木テスト</td><td>男</td><td>プロデューサー</td><td>2018-04-01</td><td>1985-08-25</td><td>35</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>5</td><td>4</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>6</td><td>高橋テスト</td><td>女</td><td>プロデューサー</td><td>2015-04-01</td><td>1988-11-3</td><td>32</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>2</td><td>4</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>7</td><td>田中テスト</td><td>女</td><td>プロデューサー</td><td>2015-04-01</td><td>1991-05-29</td><td>29</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>6</td><td>4</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>8</td><td>伊藤テスト</td><td>男</td><td>プログラマー</td><td>1998-04-01</td><td>2015-12-24</td><td>29</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>10</td><td>5</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>9</td><td>渡辺テスト</td><td>男</td><td>プログラマー</td><td>1998-04-01</td><td>2016-01-15</td><td>28</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>8</td><td>5</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>10</td><td>中村テスト</td><td>女</td><td>プログラマー</td><td>1998-04-01</td><td>2018-06-23</td><td>25</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>12</td><td>2</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>11</td><td>中野テスト</td><td>男</td><td>プログラマー</td><td>1998-04-01</td><td>1960-06-23</td><td>60</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>4</td><td>5</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>12</td><td>田村テスト</td><td>男</td><td>プログラマー</td><td>2000-04-01</td><td>1965-10-11</td><td>55</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>9</td><td>5</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>13</td><td>石田テスト</td><td>男</td><td>プログラマー</td><td>2004-04-01</td><td>1968-04-09</td><td>52</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>7</td><td>5</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>

            <td>14</td><td>安達テスト</td><td>女</td><td>プログラマー</td><td>2010-04-01</td><td>1975-08-12</td><td>45</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>3</td><td>5</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>15</td><td>井上テスト</td><td>男</td><td>プログラマー</td><td>2018-04-01</td><td>1985-08-25</td><td>35</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>5</td><td>5</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>16</td><td>テスト佐藤</td><td>女</td><td>プログラマー</td><td>2015-04-01</td><td>1988-11-03</td><td>32</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>2</td><td>5</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>17</td><td>テスト後藤</td><td>女</td><td>リードプログラマー</td><td>2015-04-01</td><td>1991-05-29</td><td>29</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>6</td><td>6</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>18</td><td>テスト菊池</td><td>男</td><td>リードプログラマ</td><td>1998-04-01</td><td>2015-12-24</td><td>29</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>10</td><td>6</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>19</td><td>テスト磯野</td><td>男</td><td>リードプログラマ</td><td>1998-04-01</td><td>2016-01-15</td><td>28</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>8</td><td>6</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>20</td><td>テスト鈴木</td><td>女</td><td>リードプログラマ</td><td>1998-04-01</td><td>2018-06-23</td><td>25</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>12</td><td>6</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>21</td><td>テスト高橋</td><td>男</td><td>リードプログラマ</td><td>1998-04-01</td><td>1960-06-23</td><td>60</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>4</td><td>6</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>22</td><td>テスト田中</td><td>男</td><td>営業</td><td>2000-04-01</td><td>1965-10-11</td><td>55</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>9</td><td>7</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>23</td><td>テスト伊藤</td><td>男</td><td>営業</td><td>2004-04-01</td><td>1968-04-09</td><td>52</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>7</td><td>7</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>24</td><td>テスト渡邊</td><td>女</td><td>営業</td><td>2010-04-01</td><td>1975-08-12</td><td>45</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>1</td><td>3</td><td>7</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>25</td><td>テスト中村</td><td>男</td><td>営業</td><td>2018-04-01</td><td>1985-08-25</td><td>35</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>5</td><td>7</td><td>1</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>26</td><td>テスト中野</td><td>女</td><td>営業</td><td>2015-04-01</td><td>1988-11-03</td><td>32</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>2</td><td>7</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>27</td><td>テスト田村</td><td>女</td><td>営業</td><td>2015-04-01</td><td>1991-05-29</td><td>29</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>2</td><td>6</td><td>7</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>28</td><td>テスト石田</td><td>男</td><td>営業</td><td>1998-04-01</td><td>2015-12-24</td><td>29</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>10</td><td>7</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>29</td><td>テスト安達</td><td>男</td><td>営業</td><td>1998-04-01</td><td>2016-01-15</td><td>28</td><td>○○大学</td><td>080-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>8</td><td>7</td><td>2</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

            <tr>
            <td>30</td><td>テスト井上</td><td>女</td><td>営業</td><td>1998-04-01</td><td>2018-06-23</td><td>25</td><td>○○大学</td><td>090-○○○○-○○○○</td><td>○○駅</td><td>3</td><td>12</td><td>7</td><td>3</td><td>2018-07-14 00:00:00</td><td>2020-05-10 00:00:00</td><td>佐藤</td>
            </tr>

        </table>
  </Scrollbars>
      {/* <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable */}
            {/* // title="スタッフリスト"
            // data={datatableData}
            columns={["Id", "Name", "Gender", "Position", "Joining_Day", "Birthday", "Age", "School_Career", "Phone_Number", "Near_Staition", "Company_Id", "Area_Id", "Occupattion_Id", "Employment_System_Id", "Entry_At", "Update_At", "Update_By"]}
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