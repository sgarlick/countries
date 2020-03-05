<template>
  <div class="footer">
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{author}} {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {return {author: "Camelot"}}
}
</script>