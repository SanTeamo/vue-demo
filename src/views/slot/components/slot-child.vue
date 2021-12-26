<template>
  <div class="slot-child">
    <div>slot-child</div>
    <div>
      <slot v-bind:childProp="childProp">{{ childProp.default }}</slot>
    </div>
    <div>
      <slot name="other" v-bind:other="other">{{ other.default }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'slot-child',
})
export default class SlotChild extends Vue {
  private childProp = {
    default: "I'm the slot-child childProp default",
    text: "I'm the slot-child childProp",
  }
  private other = {
    default: "I'm the slot-child other default",
    text: "I'm the slot-child other",
  }
  mounted(): void {
    console.log('slot-child', this.$slots)
    console.log('slot-child', this.$scopedSlots)
  }
}
</script>

<style scoped>
.slot-child {
  border: 1px solid red;
}
</style>
