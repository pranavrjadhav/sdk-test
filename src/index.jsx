/* @refresh reload */
import { delegateEvents, render } from 'solid-js/web';

import './index.css';
import App from './App';

// const root = document.getElementById('root');

// if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
//   throw new Error(
//     'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
//   );
// }

// render(() => <App />, root);

// window.SolidApp = (target = document.body) => {
//   render(() => <App />, target);
// };


window.SolidApp = (target = document.body) => {
  console.log('[SolidJS] SolidApp called with:', target);
  render(() => <App />, target,{delegateEvents:false});
  console.log('[SolidJS] App rendered successfully');
};