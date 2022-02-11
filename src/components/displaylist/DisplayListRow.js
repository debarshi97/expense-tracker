import React from 'react';

const DisplayListRow = ({property, value, key}) => {
  return (<tr key={key}>
      <td>
          {property}
      </td>
      <td>
          {value}
      </td>
  </tr>);
};

export default DisplayListRow;
