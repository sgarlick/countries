<template>
    <div class="loggedInMain">
      <Header/>
      <Sidebar  v-bind:continent="this.continent" @changeCont="changeCont"/>
      <Body v-bind:continent="this.continent"/>
      <Footer/>
    </div>

</template>

<script>
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';

export default {
  name: 'Results',
  components: {
    Header,
    Body,
    Footer,
    Sidebar
  },
  methods: {
    //Function for Side Bar to Change Continent
   changeCont(code) {
     this.continent = code
    }
  },
  computed: {
    username() {
      return this.$store.getters.user
      }
    },
    data () {
      return {
        title: "Results",
        continent: "EU"
      }
    }
}   
</script>

