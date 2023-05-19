export class Router {
    routes = [];
    
    add(routeName) {
        this.routes.push(routeName);
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle(pPath) {
        const pathname = pPath ?? window.location.pathname.substring(1)
        const route = this.routes.includes(pathname) ? `/pages/${pathname}.html` : `/pages/notfound.html`

        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    }
}