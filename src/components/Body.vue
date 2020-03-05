<template>
  <div class="resultsBody">
    <v-card class="mx-auto" max-width="1060" tile
       v-for="country in countries" :key="country.code">
      <v-list-item class="result" @click="openDetails(country)">
        <v-list-item-content>
          <v-list-item-title>{{country.name}}</v-list-item-title>
          <v-list-item-subtitle>{{country.native}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div class="text-center" v-if="dialog">
      <Details v-bind:country="this.country" @closeDialog="closeDialog"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Details from './Details'
export default {
  name: 'Body',
  components: {
    Details
  },
  methods: {
    // Open Modal Setting Country Prop
    openDetails(country) {
      this.country = country,
      this.dialog = true
    },
    // Close Dialog
    closeDialog(variable) {
      this.dialog = variable
    }
  },
  data() {
            return {
                countries: [],
                dialog: false,
                country: null
            };
        },
 // Run GraphQL Query and setting country state with response
  async mounted() {
      try {
          var result = await axios({
              method: "POST",
              url: "https://countries.trevorblades.com/",
              data: {
                  query: `
                    {
                      countries {
                        name,
                        native,
                        phone,
                        currency,
                        continent {name,code},
                        languages {name,code},
                        emoji,
                        emojiU,
                        states {name}
                      }
                    }
                  `
              }
          });
          this.countries = result.data.data.countries;
      } catch (error) {
          console.error(error);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resultsBody{
    margin-left: 80px;
    margin-top: 80px;
    padding:10px 20px 10px 20px;
    text-align: left;
    font-size: 20pt;
  }
</style>
