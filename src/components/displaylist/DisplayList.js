import React, { useEffect, useState } from "react";
import "./DisplayList.css";
var _ = require("lodash");

const DisplayList = (props) => {
  const [tableDataState, setTableDataState] = useState([]);

  useEffect(() => {
    console.log("Data passed to DisplayList ", props.data);
    setTableDataState(props.data);
  }, [tableDataState]);

  const renderTableData = () => {
    return tableDataState.map((record, index) => {
      const { property, value } = record;
      return (
        <tr key={index}>
          <td>{property}</td>
          <td style={{float: "right"}}>{value}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table>
        <tbody>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
