import './bootstrap';
import { registerMicroApps, start, MicroAppStateActions, initGlobalState } from 'qiankun';
import { ConfigurationFatory } from '@linkseeks/core';

const appConfig = ConfigurationFatory.getInstance()
appConfig.setConfig("mircoTest", "Test123")

const state = {}
const actions: MicroAppStateActions = initGlobalState(state)

actions.setGlobalState({
  appConfig
});

actions.onGlobalStateChange((state,prv)=>{
  console.log(state);
},true)


registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: 'http://localhost:4002',
    container: '#app2',
    activeRule: '/app2',
  },
  {
    name: 'react app2', // app name registered
    entry: 'http://localhost:4003',
    container: '#app3',
    activeRule: '/app3',
  }
])

start()
