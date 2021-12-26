<template>
  <slot-demo>
    <template #header="scope">scope.header ===> {{ scope.header.text }}</template>
    <template #center>
      <b>I'm in center</b>
    </template>
    <template #footer>I'm in footer</template>
    <b>I'm in test default</b>
  </slot-demo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlotDemo from './components/slot-demo.vue'

@Component({
  name: 'slot-demo-test',
  components: {
    SlotDemo,
  },
})
export default class SlotDemoTest extends Vue {}
</script>

<style scoped></style>
