import React, {useState} from 'react';
//import ProductContext from '../../ProductContext.jsx'

const ListComparison = (props) => {

  if (!props.show) {
    return null;
  } else {
    return (
      <div className="comparison-modal">
        <div className="comparison-content">
          <div className="comparison-list"></div>
          <button className="close-modal" onClick={() => {props.close(false)}}>Click here to close</button>
        </div>
      </div>
    )
  }
}

export default ListComparison;