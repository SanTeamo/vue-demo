<template>
  <div class="body">
    <h1>404</h1>
    <h3>
      当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由{ path: '*' } 通常用于客户端 404 错误
    </h3>
    <h4>当前匹配路径 {{ pathMatch }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    pathMatch: function() {
      return this.$route.params.pathMatch;
    }
  }
};
</script>
 
<style lang="css" scoped>
.body {
  margin-top: 20px;
  padding: 20px;
  height: 400px;
}
</style>