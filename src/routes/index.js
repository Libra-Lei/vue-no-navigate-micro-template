/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-13 17:01:40
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'app_monitor/micro/mpp',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('@/layouts/Index'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/page2',
          name: 'page-2',
          component: () => import('@/views/Page2.vue')
        },
      ],
    },
    {
      path: '',
      component: () => import('@/layouts/Index'),
      children: [
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    }
    // Redirect to 404 page, if no match found
    // {
    //     path: '*',
    //     redirect: '/pages/error-404'
    // }
  ]
})

export default router
