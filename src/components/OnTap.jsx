import React from 'react';
import PropTypes from 'prop-types';

function OnTap(props){
  const beer = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '25px',
    borderBottom: '1px solid #ccc'
  };

  const h3 = {
    margin: '0 0',
    color: '#333',
    fontSize: '16px'
  };

  const p = {
    margin: '5px 0 5px'
  };

  return (
    <div style={beer}>
      <div>
        <h3 style={h3}>{props.title}</h3>
        <p style={p}>{props.msg}</p>
      </div>
    </div>
  );
}

OnTap.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string
};

export default OnTap;
