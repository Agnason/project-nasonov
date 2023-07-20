<template>
  <div id="app">
    <HeaderComp></HeaderComp>

    <router-view />

    <FooterComp></FooterComp>
  </div>
</template>
<script>

import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';


export default {
  name: 'App',
  components: {
    FooterComp,
    HeaderComp,

  },

  data() {
    return {

    };
  },


}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
