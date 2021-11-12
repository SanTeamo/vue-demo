import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './page/pages'
//路由懒加载
// import BasicRoute from '@/views/router/BasicRoute.vue'
const BasicRoute = () => import('@/views/router/BasicRoute.vue')
// import DynamicRoute from '@/views/router/DynamicRoute.vue'
const DynamicRoute = () => import('@/views/router/DynamicRoute.vue')
import NestedRoute from '@/views/router/NestedRoute.vue'
import NamedView from '@/views/router/NamedView.vue'
import PassingPropsRoute from '@/views/router/PassingPropsRoute.vue'
import InComponentGuards from '@/views/router/InComponentGuards.vue'

Vue.use(VueRouter)

// 匹配 ./folderA/compA.vue 或者 ./folder-a/comp-a.vue
const files = require.context('../views', true, /^.\/[\w|-]+\/[\w|-]+\.vue$/i)
let routes = []
files.keys().forEach((key) => {
  console.log(key)
  let newKey = key.replace(/(\.\/|\.vue)/g, '')
  const route = {
    path: `/${newKey}`,
    name: newKey.replace(/(\/)/g, '-'),
    component: () => import(/* webpackChunkName: "about" */ `@/views/${newKey}`),
  }
  routes.push(route)
})

routes = routes.concat([
  {
    path: '/router/dynamic/:name',
    name: 'DynamicRoute',
    component: () => import(/* webpackChunkName: "about" */ '@/views/router/DynamicRoute'),
  },
  {
    path: '/router/nested/:name',
    name: 'NestedRoute',
    component: NestedRoute,
    children: [
      {
        // 当 /router/nested/:name 匹配成功，
        // DynamicRoute 会被渲染在 nested 的 <router-view> 中
        // 如无此路由，则 <router-view> 中不会渲染内容
        path: '',
        component: DynamicRoute,
      },
      {
        // 当 /router/nested/:name/basic 匹配成功，
        // BasicRoute 会被渲染在 NestedRoute 的 <router-view> 中
        path: 'basic',
        component: BasicRoute,
      },
      {
        // 当 /router/nested/:name/DynamicRoute 匹配成功，
        // DynamicRoute 会被渲染在 NestedRoute 的 <router-view> 中
        path: 'dynamic',
        component: DynamicRoute,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/router/NamedView',
    name: 'NamedView',
    component: NamedView,
    children: [
      {
        path: '',
        components: {
          default: BasicRoute,
          a: DynamicRoute,
          b: NestedRoute,
        },
      },
      {
        path: 'basic',
        component: BasicRoute,
      },
      {
        path: 'views',
        components: {
          default: BasicRoute,
          a: DynamicRoute,
          b: NestedRoute,
        },
      },
    ],
  },
  {
    path: '/router/PassingPropsRoute/:name',
    component: PassingPropsRoute,
    // props: true, // 布尔模式 如果 props 被设置为 true，route.params 将会被设置为组件属性props。
    // props: {name: 'Bob', id: 1 }, // 对象模式
    props: (route) => ({ q: route.query.q, name: 'a' }),
  },
  {
    path: '/router/InComponentGuards',
    component: InComponentGuards,
    props: (route) => ({ q: route.query.q, name: 'a' }),
  },
  ...pages,
])

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log('%c 全局前置守卫 beforeEach', 'color:blue')
  // console.log(to, from)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const meta = to.meta || {}
    const params = to.params || {}
    if (meta.requiresAuth && params.name !== 'Bob') {
      next({
        path: '/',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

router.beforeResolve((to, from, next) => {
  // console.log('%c 全局解析守卫 beforeResolve', 'color:blue')
  // console.log(to, from)
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // console.log('%c 全局后置钩子 afterEach', 'color:blue')
  // console.log(to, from)
})

export default router
