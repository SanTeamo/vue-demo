<template>
  <div id="app">
    <!-- 我是头部 -->
    <header class="header">
      <h2 style="text-align: center">Header</h2>
      <button @click="back">&lt;</button>
      <button @click="pre">&gt;</button>
    </header>
    <!-- 路由出口 -->
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- 路由以外的公共部分 -->
    <footer class="footer">
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back() {
      this.$router.go(-1)
    },
    pre() {
      this.$router.go(1)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  position: relative;
}
.header {
  position: relative;
}
.content {
  position: relative;
  height: 80%;
  padding: 0 5px;
}
.footer {
  position: relative;
  text-align: center;
}
</style>
