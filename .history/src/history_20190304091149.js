import { BaseRouter } from './base.js';
export class HistoryRouter extends BaseRouter {
    constructor(list) {
        super(list);
        window.addEventListener('popstate', e => {
            console.log("history======>popstate")
            this.handler();
        });
    }
    handler() {
        this.render(this.getState());
    }
    getState() {
        const path = window.location.pathname;
        return path ? path : '/';
    }
    push(path) {
        history.pushState(null, null, path);
        console.log("history======>push");
        this.handler();
    }
}