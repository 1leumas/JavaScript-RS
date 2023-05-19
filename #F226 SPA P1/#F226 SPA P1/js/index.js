import './routes.js'
const routes = {
    "home": "/pages/home.html",
    "about": "/pages/about.html",
    "contact": "/pages/contact.html",
    "notfound": "/pages/404.html"
}

document.getElementById('home').addEventListener('click', (event) => {
    route(event, 'home')
    console.log("click home")
})

document.getElementById('about').addEventListener('click', (event) => {
    route(event, 'about')
    console.log("click about")
})

document.getElementById('contact').addEventListener('click', (event) => {
    route(event, 'contact')
    console.log("click contact")
})

document.getElementById('notfound').addEventListener('click', (event) => {
    route(event, 'notfound')
    console.log("click 404")
})

function route(event, routeName) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", `/${routeName}`)
    console.log(`pegou a rota /${routeName}`)

    console.log("foi pro handle")
    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname.substring(1)] || routes['notfound']
    console.log(`definiu a rota como o nome do click ${pathname}`)

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
    console.log("mudou o #div e colocou dentro o conteudo html da rota")
}

window.onpopstate = () => handle();
handle();