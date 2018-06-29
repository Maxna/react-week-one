import React from 'react';
import PropTypes from 'prop-types';

function OnTap(props){
  const beer = {
    border: 'thick ridge navy',
    marginBottom: '8px',
    width: '300px',
    fontSize: '25px',
    fontFamily: 'comic',
    fontWeight: 'bold',
    paddingLeft: '8px',
  };

  const p = {
    margin: '8px',
  };

  const flex = {
    display: 'flex',
  };

  const button = {
    fontFamily: 'serif',
    fontSize: '25px',
  };

  return (
    <div style={beer}>
      <p style={p}>{props.title}</p>
      <p style={p}>{props.msg}</p>
      <div style={flex}>
        <p style={p}>{props.alc}</p>
        <button style={button}>Sell a Pint!</button>
      </div>
    </div>
  );
}

OnTap.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
  alc: PropTypes.string
};

export default OnTap;
