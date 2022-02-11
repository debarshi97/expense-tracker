import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { string_resources } from "../../resources/Strings";
import logo from "../../resources/images/salary.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import DashboardCard from "../cards/DashboardCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [cardData, setCardData] = useState({});
  const [isCardDatafetched, setCardDataFetched] = useState(false);
  
  // let cardData = {};
  const statement = useSelector((state) => state.statement.value);

  useEffect(() => {
    // getStatementData();
    console.log("Card data ", statement);
  }, [isCardDatafetched]);

  const getStatementData = () => {
    axios
      .get("http://localhost:5000/statement")
      .then((response) => {
        console.log("Response data ", response.data);
        const statementData = response.data
        setCardData(statementData);
        setCardDataFetched(true);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img src={logo} className="dashboard-header-logo" />
        <div className="dashboard-header-title">
          {string_resources.WEL_PAGE.HEADING}
        </div>
        <AccountCircleIcon
          fontSize="large"
          sx={{ color: "rgb(104, 44, 148)" }}
          className="dashboard-header-profile"
          onClick={() => alert("Profile pic")}
        />
      </div>
      <div className="dashboard-body">
        {/* {(cardData !== undefined && isCardDatafetched) && <DashboardCard topic={cardData.topic} data={cardData.data}/>} */}
      </div>
    </div>
  );
};

export default Dashboard;
