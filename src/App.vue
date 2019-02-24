<template>
  <div id="app">
    <div id="nav">
      <a-button>
        <router-link to="/">
          Home
        </router-link>
      </a-button>|
      <a-button>
        <router-link to="/anime">
          Anime list
        </router-link>
      </a-button>| |
      <a-button>
        <router-link to="/anime/1">
          Anime
        </router-link>
      </a-button>|
      <a-button>
        <router-link to="/doramas">
          Doramas
        </router-link>
      </a-button>|
      <a-button>
        <router-link to="/news">
          News
        </router-link>
      </a-button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "ant-design-vue";
Vue.use(Button);

export default Vue.extend({});
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
