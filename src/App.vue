<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
@import 'static/style.scss';
</style>
