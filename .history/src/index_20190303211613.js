import _ from 'lodash';
import './style.css';
function component() {
  var element = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.dataset.url = '/hash';
  li2.dataset.url = '/history';
  element.innerHTML = _.join(['123', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());