<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    }
  }  
};
</script>