import React from 'react';
import styled from 'styled-components';

const Specs = (props) => {
  return (
    <div className="container">
      <div className="about-title">
        Specifications
      </div>
      <div className="details-table">
        <table>
          {Object.keys(props.data).map(item => {
            if (item !== 'id' && item !== 'car_id') {
              return <tr className="table-row" key={Math.random() * 1000000}>
              <td className="td-left">{props.labels.specs[item]}</td>
              <td className="td-right">{props.data[item] === 'n/a' ? <span className="unavailable">N/A</span> :
                props.data[item] === true ? 'Yes' : props.data[item] === false ? 'No' : props.data[item]}
                {props.labels.specs[item] === 'Fuel Capacity' ? ' gal' : props.labels.specs[item] === 'Rim Size' ? ' in.' :
                props.data[item] > 10 && props.data[item] < 200 ? ' in.' : props.data[item] > 1000 ? ' lbs.' : ''}
                </td>
              </tr>
              }
            }
          )}
        </table>
      </div>
    </div>
  );
}

export default Specs;