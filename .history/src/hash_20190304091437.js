import { BaseRouter } from './base.js';

export class HashRouter extends BaseRouter {
    constructor(list) {
        super(list);
        window.addEventListener('hashchange', e => {
            console.log("hash======>hashchange")
            this.handler();
        });
    }
    handler() {
        this.render(this.getState());
    }
    push(path) {
        console.log("hash======>push")
        window.location.hash = path;
    }
    getState() {
        const hash = window.location.hash;
        return hash ? hash.slice(1) : '/';
    }
    go(n) {
        window.history.go(n);
    }
}