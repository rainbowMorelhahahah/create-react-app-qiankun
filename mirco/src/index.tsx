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


registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: 'http://localhost:4002',
    container: '#app2',
    activeRule: '/app2',
  }
])

start()
