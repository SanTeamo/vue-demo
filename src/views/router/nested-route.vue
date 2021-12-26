<template>
  <div>
    <h2>nested route</h2>
    <span>{{ '我的name是：' + name }}</span>
    <div>
      <!-- 等价于 router.push({ path: '/router/nested/Bob/basic' }) -->
      <router-link :to="{ path: '/router/nested/Bob/basic' }">router-link 跳转 nested route -> basic</router-link>
    </div>
    <div>
      <!-- 等价于 router.push({ path: '/router/nested/Bob/dynamic' }) -->
      <router-link :to="{ path: '/router/nested/Bob/dynamic' }" tag="button">
        router-link 跳转 nested route -> dynamic
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

console.log('load NestedRoute.vue')

@Component({
  name: 'nested-route',
})
export default class NestedRoute extends Vue {
  get name(): string {
    return this.$route.params.name
  }
}
</script>

<style lang="css" scoped></style>
