<template>
  <div>
    <h2>basic route</h2>
    <div>
      <el-button @click="$router.push('/router/dynamic/Alice')">点击跳转 dynamic route</el-button>
    </div>
    <div>
      <el-button @click="nestedButtonClick">点击跳转 nested route</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'basic-route',
})
export default class BasicRoute extends Vue {
  nestedButtonClick(): void {
    this.$router.push('/router/nested/Bob')
  }
}
</script>

<style lang="css" scoped></style>
