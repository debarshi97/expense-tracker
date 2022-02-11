import React, { useEffect, useState } from "react";
import "./DisplayList.css";
import DisplayListRow from "./DisplayListRow";
var _ = require("lodash");

const DisplayList = (props) => {
  const [tableDataState, setTableDataState] = useState([]);

  useEffect(() => {
    console.log("Data passed to DisplayList ", props);
    if (props !== undefined) {
      setTableDataState(getTableData(props));
    }
  }, []);

  const getTableData = (props) => {
    let tableData = [];
    const tableDataLength = _.size(props);
    for (let i = 0; i < tableDataLength; i++) {
      let property = _.keys(props)[i];
      let value = props[property]?.value;
      tableData[i] = { property, value };
    }
    console.log("Table data in list ", tableData);
    return tableData;
  };

  return (
    <div>
      <table>
        <tbody>
          {tableDataState.forEach((element, index) => {
            <DisplayListRow
              key={index}
              property={element.property}
              value={element.property}
            />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
