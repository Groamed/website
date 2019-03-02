<template>
  <div class="header">
    <LinksList :elements="navElements"></LinksList>

    <RegisterModal />
  </div>
</template>

<script>
import { ROUTES } from '../../constants'

import LinksList from '../../components/header/LinksList'
import RegisterModal from '../header/RegisterModal'

export default {
  name: 'header_',
  components: {
    LinksList,
    RegisterModal
  },
  computed: {
    navElements() {
      return Object.keys(ROUTES).map(key => ({
        to: ROUTES[key].url,
        body: ROUTES[key].text
      }))
    }
  }
}
</script>
