export class HashRouter extends BaseRouter{
    constructor(list) {
        window.addEventListener('hashchange', e => {
            this.handler();
        });
    }
    handler() {
        this.render(this.getState());
    }
    push(path) {
        window.location.hash = path;
    }
    getState() {
        const hash = window.location.hash;
        return hash ? hash.slice(1) : '/';
    }
}