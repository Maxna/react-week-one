import React from 'react';

function Header(){
  const header = {
    textAlign: 'center',
    fontFamily: 'comic, sans-serif',
    fontWeight: '500',
    fontSize: '30px',
    backgroundColor: 'brown',
    borderStyle: 'double',
    borderRadius: '50%',
    width: '270px',
    padding: '12px',
    marginBottom: '8px'
  };

  return (
    <div>
      <h2 style={header}>Brewery Bro's</h2>
    </div>
  );
}

export default Header;
