export default [
  {
    path: '/',
    name: 'index',
    // redirect: '/router/NamedView', // 按路径
    redirect: { name: 'router-BasicRoute' }, // 按路由名称
  },
  {
    path: '/404',
    name: 'errorPage404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/error-page/404'),
    beforeEnter: (to, from, next) => {
      console.log('%c 路由独享守卫 beforeEnter', 'color:blue')
      console.log(to, from)
      next()
    },
  },
  {
    // 当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由{ path: '*' } 通常用于客户端 404 错误
    path: '*',
    name: 'errorPage404Redirect',
    redirect: '/404',
  },
]
