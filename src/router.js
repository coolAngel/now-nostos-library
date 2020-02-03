import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') },
    {
      path: '/admin', 
      name: 'admin', 
      component: () => import(/* webpackChunkName: "admin" */ './views/admin/index.vue'),
      children: [
        {
          path: 'books', 
          component: () => import(/* webpackChunkName: "adminBooks" */ './views/admin/books/index.vue'),
          children: [
            { path: 'create', component: () => import(/* webpackChunkName: "adminBooks" */ './views/admin/books/create.vue'), }
          ]
        }
      ]
    },
    {
      path: "/auth",
      component: () => import(/* webpackChunkName: "adminBooks" */ './views/auth/index.vue'),
      children: [
        { path: "sign_up", component: () => import(/* webpackChunkName: "auth" */ './views/auth/SignUp.vue') },
        { path: "sign_in", component: () => import(/* webpackChunkName: "auth" */ './views/auth/SignIn.vue') }
      ]
    }
  ]
})
