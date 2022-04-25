import './bootstrap';
import { registerMicroApps, start, MicroAppStateActions, initGlobalState } from 'qiankun';

export const actions: MicroAppStateActions = initGlobalState()

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: 'http://localhost:4002',
    container: '#app2',
    activeRule: '/app2',
  }
])

start()