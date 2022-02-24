import React, { useEffect, useState } from "react";
import "./DashboardCard.css";
import DisplayList from "../displaylist/DisplayList";

const DashboardCard = (props) => {
  useEffect(() => {
    console.log("DashboardCard Props ", props);
  }, []);

  return (
    <div className="card">
      {props.loading === "loaded" ? (
        <div>
          <div className="card-heading">{props.topic}</div>
          <div className="card-body">
            <DisplayList data={props.data} />
          </div>
        </div>
      ) : (
        <div className="card-heading">Loading...</div>
      )}
    </div>
  );
};

export default DashboardCard;
