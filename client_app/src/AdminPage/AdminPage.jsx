import React, { useEffect, useState } from "react";
import { getItem } from "./utils.js";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import AdminGame from "./AdminUser";
import AdminUser from "./AdminDish";
import Chart from "./Component/chart/Chart"
import FeaturedInfo from "./Component/featuredInfo/FeaturedInfo"
import Sidebar from "./Component/sidebar/Sidebar.jsx";


const AdminPage = () => { 
  let date = new Date().toJSON().slice(0, 10);
const [chart, setChart] = useState([]);
useEffect(() => {
  // Giả sử rằng chúng ta có một số dữ liệu giả
  const fakeData = [
    { MONTH: 1, TOTAL_COST: 100 },
    { MONTH: 2, TOTAL_COST: 200 },
    { MONTH: 3, TOTAL_COST: 300 },
    { MONTH: 5, TOTAL_COST: 200 },
    { MONTH: 7, TOTAL_COST: 300 },
    { MONTH: 11, TOTAL_COST: 100 },
    { MONTH: 12, TOTAL_COST: 300 },
    
  ];
  setChart(fakeData);
}, []);
const chartData = [
  { name: 'Jan', Sales: 0 },
  { name: 'Feb', Sales: 0 },
  { name: 'Mar', Sales: 0 },
  { name: 'Apr', Sales: 0 },
  { name: 'May', Sales: 0 },
  { name: 'Jun', Sales: 0 },
  { name: 'Jul', Sales: 0 },
  { name: 'Aug', Sales: 0 },
  { name: 'Sep', Sales: 0 },
  { name: 'Oct', Sales: 0 },
  { name: 'Nov', Sales: 0 },
  { name: 'Dec', Sales: 0 },
];
for (let index = 0; index < chartData.length; index++) {
  for (let i = 0; i < chart.length; i++) {
    if (chart[i]['MONTH'] === index + 1) {
      chartData[index]['Sales'] = chart[i]['TOTAL_COST'];
    }
  }
}

  const items = [
    getItem("User", "users", <UserOutlined />),
    getItem("Game", "games", <AppstoreOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");

  const renderPage = (key) => {
    switch (key) {
      case "users":
        return <AdminUser />;
      case "games":
        return <AdminGame />;
      default:
        return <></>;
    }
  };

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  console.log("keySelected", keySelected);

  return (
    <div style={{ display: "flex" }}>
    <Sidebar
      mode="inline"
      style={{
        // width: "500px",
        boxShadow: "1px 1px 2px #ccc",
        height: "100vh",
      }}
      items={items}
      onClick={handleOnCLick}
    />
    <div style={{ flex: 4 }}>
      <FeaturedInfo />
      <Chart data={chartData} title="User Analytics" grid dataKey="Sales" />
      <div style={{ flex: 1, padding: "20px" }}>
        {renderPage(keySelected)}
      </div>
    </div>
  </div>
  
    
  );
};
export default AdminPage;
