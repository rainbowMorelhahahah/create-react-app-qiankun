import { MicroAppStateActions } from 'qiankun';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './bootstrap';

export let appConfig: any = {};

export let appPropst: MicroAppStateActions;

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props: any) {

  props.onGlobalStateChange((state: any, prev: any) => {
    appConfig = state.appConfig;
  }, true)

  appPropst = props;

  const root = ReactDOM.createRoot(
    props.container ? props.container.querySelector('#root') : document.getElementById('root')
  );
  root.render(<App />)
}

export async function unmount(props: any) {
  const root = ReactDOM.createRoot(
    props.container ? props.container.querySelector('#root') : document.getElementById('root')
  );
  root.unmount()
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props', props);
}