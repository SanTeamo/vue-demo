import Vue from 'vue'
import Router from 'vue-router'
import BasicRoute from '@/views/router/BasicRoute.vue'
import DynamicRoute from '@/views/router/DynamicRoute.vue'
import NestedRoute from '@/views/router/NestedRoute.vue'
import ErrorPage404 from '@/views/error-page/404.vue'
import ProgrammaticNavigation from '@/views/router/ProgrammaticNavigation.vue'
import NamedView from '@/views/router/NamedView.vue'
import PassingPropsRoute from '@/views/router/PassingPropsRoute.vue'
import InComponentGuards from '@/views/router/InComponentGuards.vue'
Vue.use(Router)
const router = new Router({
    // 匹配的优先级按照路由的定义顺序：路由定义得越早，优先级就越高。
    routes: [
        {
            path: '/router/basic',//浏览器访问路径
            name: 'BasicRoute', //路由名称
            component: BasicRoute, //模板，对应import引入的模板信息
        },
        {
            path: '/router/dynamic/:name',
            name: 'DynamicRoute',
            component: DynamicRoute
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
                    component: DynamicRoute
                },
                {
                    // 当 /router/nested/:name/basic 匹配成功，
                    // BasicRoute 会被渲染在 NestedRoute 的 <router-view> 中
                    path: 'basic',
                    component: BasicRoute
                },
                {
                    // 当 /router/nested/:name/DynamicRoute 匹配成功，
                    // DynamicRoute 会被渲染在 NestedRoute 的 <router-view> 中
                    path: 'dynamic',
                    component: DynamicRoute
                },
            ]
        },
        {
            path: '/router/ProgrammaticNavigation',
            name: 'ProgrammaticNavigation',
            component: ProgrammaticNavigation
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
                    }
                },
                {
                    path: 'basic',
                    component: BasicRoute
                }, {
                    path: 'views',
                    components: {
                        default: BasicRoute,
                        a: DynamicRoute,
                        b: NestedRoute,
                    }
                }
            ]
        },
        {
            path: '/router/PassingPropsRoute/:name',
            component: PassingPropsRoute,
            // props: true, // 布尔模式 如果 props 被设置为 true，route.params 将会被设置为组件属性props。
            // props: {name: 'Bob', id: 1 }, // 对象模式
            props: route => ({ q: route.query.q, name: 'a' }),
        },
        {
            path: '/router/InComponentGuards',
            component: InComponentGuards,
            props: route => ({ q: route.query.q, name: 'a' }),
        },
        {
            path: '/',
            name: 'index',
            // redirect: '/router/NamedView', // 按路径
            redirect: { name: 'BasicRoute' }, // 按路由名称
        },
        {
            path: '/404',
            name: 'errorPage404',
            component: ErrorPage404,
            beforeEnter: (to, from, next) => {
                console.log('%c 路由独享守卫 beforeEnter', 'color:blue')
                console.log(to, from)
                next()
            },
        },
        {
            // 当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由{ path: '*' } 通常用于客户端 404 错误
            path: '*',
            name: 'errorPage404',
            redirect: '/404',
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('%c 全局前置守卫 beforeEach', 'color:blue')
    console.log(to, from)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('%c 全局解析守卫 beforeResolve', 'color:blue')
    console.log(to, from)
    next()
})

router.afterEach((to, from) => {
    console.log('%c 全局后置钩子 afterEach', 'color:blue')
    console.log(to, from)
})

export default router