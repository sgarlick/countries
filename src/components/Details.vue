<template>
  <div class="details">
    <div class="text-center">
      <v-dialog v-model="dialog" width="500" >
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{this.country.name}}
          </v-card-title>
          <v-card-text></v-card-text>
          <v-card-text>Native Country Name: {{this.country.native}}</v-card-text>
          <v-card-text><v-icon> {{this.country.emoji}}</v-icon></v-card-text>
           <v-card-text>
             Local Currency: {{this.country.currency}}
          </v-card-text>
          <v-card-text>
             Local language: {{this.country.languages[0].name}}
          </v-card-text>
           <v-card-text>
             Phone Code +{{this.country.phone}}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDialog()">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['country'],
    methods: {
      // Notify the Parent Components that the dialog is closed
      closeDialog: function () {
        this.$emit('closeDialog', false);
        this.dialog = false
      }
    },
    data () {
      return {
        dialog: true   
      }
    } 
  }   
</script>