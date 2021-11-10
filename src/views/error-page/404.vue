<template>
  <div class="body">
    <h1>404</h1>
    <h3>
      当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由{ path: '*' }
      通常用于客户端 404 错误
    </h3>
    <h4>当前匹配路径 {{ pathMatch }}</h4>
    <h4>重定向自 {{ redirectedFrom }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    pathMatch: function () {
      return this.$route.params.pathMatch
    },
    redirectedFrom: function () {
      return this.$route.redirectedFrom
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
    // 不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    console.log('%c beforeRouteEnter', 'color:blue')
    // console.log(to, from)
    next((vm) => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
}
</script>

<style lang="css" scoped>
.body {
  margin-top: 20px;
  padding: 20px;
  height: 400px;
}
</style>
