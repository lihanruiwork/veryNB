class HashRouter extends BaseRouter{
    constructor(list) {
        window.addEventListener('hashchange', e => {
            this.handler();
        });
    }
    push(path) {
        window.location.hash = path;
    }
    getState() {
        const hash = window.location.hash;
        return hash ? hash.slice(1) : '/';
    }
}