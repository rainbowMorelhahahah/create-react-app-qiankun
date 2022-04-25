import React from 'react';
import './App.css';

import { ConfigurationFatory } from '@linkseeks/core';

function App() {

  const config = ConfigurationFatory.getInstance()
  const value = config.getConfig("mircoTest")

  console.log(value);
  

  return (
    <>
      Hollow App2
    </>
  );
}

export default App;


