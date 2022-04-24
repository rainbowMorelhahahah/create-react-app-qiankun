import React from 'react';
import './App.css';
import { TestService } from './service/TestService';
import { useInject } from 'linkseeks-hooks';


function App() {

  const [service] = useInject<TestService>('testService');

  return (
    <>
      {service?.sendHollow()}
    </>
  );
}

export default App;


