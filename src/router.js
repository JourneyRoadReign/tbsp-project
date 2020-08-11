import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './layout/DashboardLayout.vue'
Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "demo" */ './layout/DashboardLayout.vue')
                }
            ]
        }
    ]
})
