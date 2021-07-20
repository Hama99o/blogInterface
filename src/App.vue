<template>
  <div id="app">
    <app-header> </app-header>

    <div class="content">
      <router-view> </router-view>
    </div>

    <app-footer> </app-footer>
  </div>
</template>

<script>

import Header from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  /* padding: 20px; */
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
