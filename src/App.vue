<template>
  <div id="app" class="container">
    <app-header></app-header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/layouts/Layout.vue';
import { Component } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    'app-header': Header,
  },
})
export default class App extends Vue {
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
