import React, { useEffect } from 'react';
import './App.css';

import { appConfig, appPropst } from '.';

function App() {

  const value = appConfig.getConfig('mircoTest');

  return (
    <>
      Hollow App2 {value}

      <button onClick={() => {
        appConfig.setConfig("mircoTest", "Test456")
        appPropst.setGlobalState({
          appConfig
        })
        window.history.pushState({}, '', "/app3")
      }}>to App3</button>
    </>
  );
}

export default App;


