import React from 'react';

function Header(){
  const header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif',
    padding: '0 25px',
    minWidth: '625px',
    color: '#333',
  };

  return (
    <div>
      <h1 style={header}>Brewery Bro's</h1>
    </div>
  );
}

export default Header;
