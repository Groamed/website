<template>
  <block-full :className="'mainContainer'" :style="style">
    <slot />
  </block-full>
</template>

<script>
import BlockFull from './BlockFull'

export default {
  name: 'main-container',
  props: {
    style: {
      type: String,
      required: false,
      default: 'min-height: calc(100vh - 70px)'
    }
  },
  components: {
    BlockFull
  }
}
</script>
