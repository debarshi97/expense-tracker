import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { string_resources } from "../../resources/Strings";
import logo from "../../resources/images/salary.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardCard from "../cards/DashboardCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatementData, selectStatementData } from "../../features/statement";

const Dashboard = () => {
  const statement = useSelector(selectStatementData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatementData());
  }, [dispatch]);

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
          onClick={() => {
              console.log("Card Data ", statement);
              alert("Profile pic")
            }
          }
        />
      </div>
      <div className="dashboard-body">
        <DashboardCard topic={statement.value.topic} data={statement.value.data} loading={statement.loading}/>
      </div>
    </div>
  );
};

export default Dashboard;
