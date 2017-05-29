import {join} from 'lodash/join';

function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'Webpack'], ' ');
  return element;
}

document.body.appendChild(component());
