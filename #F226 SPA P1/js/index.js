import {Router} from './routes.js'
const router = new Router();

router.add("home")
router.add("about")
router.add("contact")
router.add("notfound")

window.onpopstate = () => router.handle();
window.route = () => router.route();

router.handle("home");