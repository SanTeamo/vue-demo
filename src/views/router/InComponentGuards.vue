<template>
  <div>
    组件内的守卫
    <button @click="jump">点击跳转</button>
    <div>完整的导航解析流程</div>
    <ol>
      <li>导航被触发。</li>
      <li>
        在失活的组件里调用
        <code>beforeRouteLeave</code>
        守卫。
      </li>
      <li>
        调用全局的
        <code>beforeEach</code>
        守卫。
      </li>
      <li>
        在重用的组件里调用
        <code>beforeRouteUpdate</code>
        守卫 (2.2+)。
      </li>
      <li>
        在路由配置里调用
        <code>beforeEnter</code>
        。
      </li>
      <li>解析异步路由组件。</li>
      <li>
        在被激活的组件里调用
        <code>beforeRouteEnter</code>
        。
      </li>
      <li>
        调用全局的
        <code>beforeResolve</code>
        守卫 (2.5+)。
      </li>
      <li>导航被确认。</li>
      <li>
        调用全局的
        <code>afterEach</code>
        钩子。
      </li>
      <li>触发 DOM 更新。</li>
      <li>
        调用
        <code>beforeRouteEnter</code>
        守卫中传给
        <code>next</code>
        的回调函数，创建好的组件实例会作为回调函数的参数传入。
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
    // 不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    console.log('%c beforeRouteEnter', 'color:blue')
    console.log(to, from)
    next((vm) => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('%c beforeRouteUpdate', 'color:blue')
    console.log(to, from)
    console.log('to.params', to.params)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  beforeCreate() {
    console.log('%c 组件加载beforeCreate', 'color:blue')
  },
  methods: {
    jump() {
      const name = '组件内的守卫'
      this.$router.push({ path: `/router/dynamic/${name}` })
    },
  },
}
</script>

<style scoped></style>
