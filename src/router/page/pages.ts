import { NavigationGuardNext, Route, RouteConfig } from 'vue-router'

export const pages: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    // redirect: '/router/basic-route', // 按路径
    redirect: { name: 'router-basic-route' }, // 按路由名称
  },
  {
    path: '/404',
    name: 'error-page-404',
    component: () => import(/* webpackChunkName: "about" */ '@/router/page/error-page/404.vue'),
    beforeEnter: (to: Route, from: Route, next: NavigationGuardNext): void => {
      console.log('%c 路由独享守卫 beforeEnter', 'color:blue')
      console.log(to, from)
      next()
    },
  },
  {
    // 当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由{ path: '*' } 通常用于客户端 404 错误
    path: '*',
    name: 'error-page-404-redirect',
    redirect: '/404',
  },
]

export default pages
