import _ from 'lodash';
import './style.css';
document.querySelector('.btn-list').addEventListener('click', e => {
  const event = e || window.event;
  if (event.target.tagName === 'LI') {
    const url = event.target.dataset.url;
    !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url);
  }
});