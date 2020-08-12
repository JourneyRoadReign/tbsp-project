import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/kimchi',
            component: () => import(/* webpackChunkName: "demo" */ './views/Kimchi.vue')
        },
        {
            path: '/empanada',
            component: () => import(/* webpackChunkName: "demo" */ './views/EmpanadaChicken.vue')
        },
        {
            path: '/ham-and-cheese',
            component: () => import(/* webpackChunkName: "demo" */ './views/EmpanadaHamAndCheese.vue')
        }
    ]
})
