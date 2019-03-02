<template>
  <block-full :className="'episode--background'" :style="style">
    <slot />
  </block-full>
</template>

<script>
import BlockFull from './BlockFull'

export default {
  name: 'episode-background',
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
