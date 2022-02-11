import React, { useEffect, useState } from "react";
import "./DashboardCard.css";
import DisplayList from "../displaylist/DisplayList";

const DashboardCard = (props) => {
  useEffect(() => {
    console.log("DashboardCard Props ", props);
  }, []);

  return (
    <div className="card">
      <div className="card-heading">{props.topic}</div>
      {/* <div className="card-body">{props.body}</div> */}
      {/* <div className='card-body'>
        <DisplayList data={props.body}/>
          
      </div>   */}
    </div>
  );
};

export default DashboardCard;
