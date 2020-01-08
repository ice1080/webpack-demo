import printMe from './print.js';
import './styles.css';

async function getComponent() {
  const element = document.createELement('div');
  const { default: _ } = await import(/* webpackCHunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
