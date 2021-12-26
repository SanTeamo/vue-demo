<template>
  <div>
    <h2>dynamic route</h2>
    <span>{{ '我的name是：' + name }}</span>
  </div>
</template>

<script lang="ts">
console.log('load DynamicRoute.vue')
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'dynamic-route',
})
export default class DynamicRoute extends Vue {
  get name(): string {
    return this.$route.params.name //参数都保存在params中
  }

  created(): void {
    console.log('this.$route', this.$route) // 当前子页面路由信息
    console.log('this.$router', this.$router) // 全局路由信息
  }
}
</script>

<style lang="css" scoped></style>
