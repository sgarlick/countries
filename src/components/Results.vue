<template>
    <div class="loggedInMain">
      <Header/>
      <Sidebar/>
      <Body/>
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
  computed: {
    username() {
      return this.$store.getters.user
      }
    },
    data () {
      return {
        title: "Results"
      }
    }
}   
</script>

