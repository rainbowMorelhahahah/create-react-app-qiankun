import React from 'react';
import './App.css';

import { appConfig } from '.';

function App() {

  const value = appConfig.getConfig('mircoTest');

  return (
    <>
      Hollow App2 {value}
    </>
  );
}

export default App;


