import React from 'react';
import styled from 'styled-components';

const Safety = (props) => {
  return (    
    <div className="container">
    <div className="about-title">
      Safety
    </div>
    <div className="details-table">
      <table>
        {Object.keys(props.data).map(item => {
          if (item !== 'id' && item !== 'car_id') {
            return <tr className="table-row" key={Math.random() * 1000000}>
              <td className="td-left">{props.labels.safety[item]}</td>
              <td className="td-right"><img src={props.data[item] === '0' ? "https://imgur.com/bkfmKXX.png" :
                props.data[item] === '3' ? "https://imgur.com/aVFMB7O.png" :
                props.data[item] === '4' ? "https://imgur.com/87qJJeT.png" :
                props.data[item] === '5' ? "https://imgur.com/IEx7260.png" : ''} />
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

export default Safety;
