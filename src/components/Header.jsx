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
    width: '300px',
    padding: '15px',
    marginBottom: '8px'
  };

  return (
    <div>
      <h2 style={header}>Brewery Bro's</h2>
    </div>
  );
}

export default Header;
