import React from 'react';
import './App.css';
import { Application, ConfigurationFatory } from '@linkseeks/core';
import HomePage from './pages/index';
import { TestService } from './service/TestService';
import { useAsyncEffect } from 'linkseeks-hooks';
import {useInject as useInjectLocation} from './hooks'
import {useAsyncEffect as useAsyncEffectAhooks} from 'ahooks';

console.log(useAsyncEffect);
console.log(useInjectLocation);
console.log(useAsyncEffect);



function App() {

  const config = ConfigurationFatory.getInstance();
  const key = config.getConfig('Key');

  const [service] = useAsyncEffect<TestService>('testService');

  return (
    <Application>
      <HomePage />
      {service?.sendHollow()}
      {key}
    </Application>
  );
}

export default App;
