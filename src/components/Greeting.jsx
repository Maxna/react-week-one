import React from 'react';

function Greeting(){
  const greeting = {
    textAlign: 'center',
    fontFamily: 'comic, sans-serif',
    fontWeight: '500',
    marginTop: '0px',
    fontSize: '40px',
  };

  return (
    <div>
      <h1 style={greeting}>Welcome to Brewfest!</h1>
    </div>
  );
}

export default Greeting;
