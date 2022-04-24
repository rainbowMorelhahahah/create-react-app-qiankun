import React from 'react';
import './App.css';
import { TestService } from './service/TestService';
import { useInject } from 'linkseeks-hooks';

const App2 = React.lazy(() => import('app/App'))
console.log(App2);


function App() {

  const [service] = useInject<TestService>('testService');

  return (
    <React.Suspense fallback={<>loading...</>}>
      {service?.sendHollow()}
     
    </React.Suspense>
  );
}

export default App;


