<!--suppress HtmlUnknownAttribute -->
<template>
  <slot-render>
    <template #header="scope">{{ scope.text }}</template>
    <template #center>
      <b>I'm in center</b>
    </template>
    <template #footer>I'm in footer</template>
    <b>I'm in test default</b>
  </slot-render>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SlotRender from './components/slot-render'

@Component({
  name: 'slot-render-test',
  components: {
    SlotRender,
  },
})
export default class SlotRenderTest extends Vue {}
</script>

<style scoped></style>
