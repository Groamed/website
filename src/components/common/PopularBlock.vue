<template>
  <block-full
    :className="'popular--block borderTop borderBottom'"
    :style="style"
  >
    <slot />
  </block-full>
</template>

<script>
import BlockFull from './BlockFull'

export default {
  name: 'popular-block',
  props: {
    style: {
      type: String,
      required: false,
      default: ''
    }
  },
  components: {
    BlockFull
  }
}
</script>
