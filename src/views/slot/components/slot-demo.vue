<template>
  <div>
    <div>
      <slot>default</slot>
    </div>
    <div>
      <slot name="header" v-bind:header="headerProps">{{ headerProps }}</slot>
    </div>
    <div>
      <div>
        <slot name="center">center</slot>
      </div>
      <slot-child>
        <template #default="{ childProp }">{{ childProp.text }}</template>
      </slot-child>
    </div>
    <div>
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script lang="ts">
import SlotChild from './slot-child.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'slot-demo',
  components: {
    SlotChild,
  },
})
export default class SlotDemo extends Vue {
  private headerProps = {
    text: 'headerProps text',
  }
  mounted(): void {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  }
}
</script>

<style scoped></style>
