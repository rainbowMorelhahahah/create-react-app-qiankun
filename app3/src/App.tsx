import React from 'react';
import './App.css';

import { appConfig } from '.';

function App() {

  const value = appConfig.getConfig('mircoTest');

  return (
    <>
      Hollow App3 {value}
    </>
  );
}

export default App;


