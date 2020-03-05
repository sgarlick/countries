<template>
  <div class="navBar"  v-if="userLoggedIn" >
    <!-- display the navigation bar -->
    <v-toolbar-items class='hidden-xs-only'>
        <v-btn @click='logoutFromFirebase'  mobileBreakPoint="320">
          Logout
        </v-btn>
      </v-toolbar-items>
  </div>
</template>

<script>
export default {
  computed: {
    userLoggedIn () {
      return this.$store.getters.user
    }
  },
  methods: {
    logoutFromFirebase () {
      this.$store.dispatch('signOutAction');
      this.$router.push('/')
    }
  }
}
</script>
<style>
.navBar{
  position:relative;
  width:90px;
  height: 56px;
  text-align: center;
  margin-left:auto; 
  margin-right:10px;
  z-index:3000;
}
</style>