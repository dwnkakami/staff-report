import React from "react";
import Select from "@material-ui/core/Select";

const options = [
  {
    EmployeeId: 1,
    FirstName: "田中",
    LastName: "健太郎",
    DepartmentId: 2,
    DepartmentName: "営業"
  },
  {
    EmployeeId: 2,
    FirstName: "山田",
    LastName: "五郎",
    DepartmentId: 2,
    DepartmentName: "営業"
  },
  {
    EmployeeId: 3,
    FirstName: "マット",
    LastName: "マックス",
    DepartmentId: 2,
    DepartmentName: "カスタマー"
  },
  {
    EmployeeId: 4,
    FirstName: "ジャッキー",
    LastName: "ボンド",
    DepartmentId: 4,
    DepartmentName: "開発"
  },
  {
    EmployeeId: 5,
    FirstName: "釜戸",
    LastName: "りな",
    DepartmentId: 3,
    DepartmentName: "デザイン"
  },
  {
    EmployeeId: 6,
    FirstName: "マット",
    LastName: "マックス",
    DepartmentId: 4,
    DepartmentName: "開発"
  }
];

const formatOptionLabel = ({ FirstName, LastName, DepartmentName }) => (
  <div style={{ display: "flex" }}>
    <div>
      {FirstName} {LastName}
    </div>
    <div style={{ marginLeft: "10px", color: "#999" }}>{DepartmentName}</div>
  </div>
);

class SelectBox2 extends React.Component {
  handleChange(value) {
    console.log(value);
  }

  render() {
    return (
      <Select
        onChange={this.handleChange}
        options={options}
        getOptionValue={option => option["EmployeeId"]}
        getOptionLabel={option =>
          option["FirstName"] + option["LastName"] + option["DepartmentName"]
        }
        formatOptionLabel={formatOptionLabel}
      />
    );
  }
}

export default SelectBox2;
