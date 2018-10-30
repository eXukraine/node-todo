import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue')
    },
    {
      path: '/monday',
      name: 'monday',
      component: () => import('../views/days/Monday.vue')
    },
    {
      path: '/wensday',
      name: 'wensday',
      component: () => import('../views/days/Wensday.vue')
    },
    {
      path: '/friday',
      name: 'friday',
      component: () => import('../views/days/Friday.vue')
    }
  ]
})