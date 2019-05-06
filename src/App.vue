<template>
  <div id="app"> 
    <h1>Getting to know Cypress with Vuejs!</h1>
    <input class="hello-world">
    <button @click="hello">Touch Here</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  methods: {
    hello(){
      alert('É só OI e Tchau!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
