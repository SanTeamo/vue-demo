<template>
  <div>
    <p>
      在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。 使用
      props 将组件和路由解耦：
    </p>
    <h4>接收参数 name = {{ name }} , id = {{ id }}, q = {{ q }}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'passing-props-route',
})
export default class PassingPropsRoute extends Vue {
  @Prop({ default: '' }) private name?: string
  @Prop({ default: '' }) private id?: string
  @Prop({ default: '' }) private q?: string

  created(): void {
    console.log(this.$route.params)
  }
}
</script>

<style></style>
