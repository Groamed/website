<template>
  <div id="app">
    <Logotype></Logotype>

    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/common/Header'
import Footer from './views/common/Footer'
import Logotype from './components/common/Logotype'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Logotype
  }
}
</script>
