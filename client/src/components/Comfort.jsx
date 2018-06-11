import React from 'react';
import styled from 'styled-components';

const Comfort = (props) => {
  return (
    <div className="container">
      <div className="about-title">
        Comfort
      </div>
      <div className="details-table">
        <table>
          {Object.keys(props.data).map(item => {
            if (item !== 'id' && item !== 'car_id') {
              return <tr className="table-row" key={Math.random() * 1000000}>
              <td className="td-left">{props.labels.comfort[item]}</td>
              <td className="td-right">{props.data[item] === 'n/a' ? <span className="unavailable">N/A</span> :
                props.data[item] === true ? 'Yes' : props.data[item] === false ? 'No' : props.data[item]}</td>
              </tr>
            }
            }
          )}
        </table>
      </div>
    </div>
  );
}

export default Comfort;