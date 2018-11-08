<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Posts</router-link></li>
      <li><router-link to="/Editor">Editor</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
