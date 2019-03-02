<template>
  <div class="nav">
    <router-link
      v-for="element in elements"
      :key="element.body"
      :to="element.to"
      >{{ element.body }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'links',
  props: {
    elements: {
      type: Array,
      required: true
    }
  }
}
</script>
