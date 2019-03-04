import { BaseRouter } from './base.js';
export class HistoryRouter extends BaseRouter {
    constructor(list) {
        super(list);
        window.addEventListener('popstate', e => {
            this.handler();
        });
    }
}