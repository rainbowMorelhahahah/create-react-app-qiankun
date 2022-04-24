import React, { useContext, useEffect } from 'react';
import './App.css';
import { ConfigurationFatory } from '@linkseeks/core';
import HomePage from './pages/index';
import { TestService } from './service/TestService';
import { DiContext, useInject, container } from 'linkseeks-hooks';


function App() {

  const [service] = useInject<TestService>('testService');

  return (
    <>
      {service?.sendHollow()}
    </>
  );
}

export default App;


