<template>
  <div :class="`block--full ${className}`" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'block-full',
  props: {
    className: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false
    }
  }
}
</script>
