import React, { useState } from 'react';
import './App.css';
import { Application, ConfigurationFatory, container } from '@linkseeks/core';
import HomePage from './pages/index';
import { TestService } from './service/TestService';
import { useInject } from './hooks';



function App() {

  const config = ConfigurationFatory.getInstance();
  const key = config.getConfig('Key');

  const [service] = useInject<TestService>('testService');

  return (
    <Application>
      <HomePage />
      {service?.sendHollow()}
      {key}
    </Application>
  );
}

export default App;
