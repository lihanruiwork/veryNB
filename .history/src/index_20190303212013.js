import _ from 'lodash';
import './style.css';
function component() {
  var element = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.dataset.url = '/hash';
  li1.innerText = 'push hash';
  li2.dataset.url = '/history';
  li2.innerText = 'push history';
  element.appendChild(li1);
  element.appendChild(li2);
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());