import { HashRouter } from './hash';
import { HistoryRouter } from './history';
class WebRouter {
  constructor({ mode = 'hash', routeList }) {
    this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList);
  }
  push(path) {
    this.router.push(path);
  }
  replace(path) {
    this.router.replace(path);
  }
  go(num) {
    this.router.go(num);
  }
}
const MODE = 'hash';
const ROUTELIST = [
  {
    path: '/',
    name: 'index',
    component: 'This is index page'
  },
  {
    path: '/hash',
    name: 'hash',
    component: 'This is hash page'
  },
  {
    path: '/history',
    name: 'history',
    component: 'This is history page'
  },
  {
    path: '*',
    name: 'notFound',
    component: '404 NOT FOUND'
  }
];

const webRouter = new WebRouter({
  mode: MODE,
  routeList: ROUTELIST
});
document.querySelector('.btn-list').addEventListener('click', e => {
  const event = e || window.event;
  if (event.target.tagName === 'LI') {
    const url = event.target.dataset.url;
    !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url);
  }
});