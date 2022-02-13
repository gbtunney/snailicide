import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes:Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

/*router.beforeEach(async (to, from, next) => {
    const authStatus = await getCurrentUser();
    const requireAuth = to.matched.some((route) => route.meta.requireAuth);
    if (requireAuth && !authStatus) {
        next({ path: "/login" });
    } else {
        next();
    }
});*/

export default router
