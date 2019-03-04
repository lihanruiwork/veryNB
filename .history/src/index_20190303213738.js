import _ from 'lodash';
import './style.css';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['123', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}
document.querySelector('.btn-list').addEventListener('click', e => {
  const event = e || window.event;
  if (event.target.tagName === 'LI') {
    const url = event.target.dataset.url;
    !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url);
  }
});
document.body.appendChild(component());