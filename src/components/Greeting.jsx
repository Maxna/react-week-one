import React from 'react';

function Greeting(){
  const greeting = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };

  return (
    <div>
      <h1 style={greeting}>Welcome to Brewfest!</h1>
    </div>
  );
}

export default Greeting;
