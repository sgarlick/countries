<template>
  <div class="resultsBody">
    <div v-if="this.continent===null">
      <v-card class="mx-auto" max-width="1060" tile
        v-for="(country, index) in countries" :key="index">
        <v-list-item class="result" @click="openDetails(country)">
          <v-list-item-content>
            <v-list-item-title>{{country.name}}</v-list-item-title>
            <v-list-item-subtitle>{{country.native}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <div v-else>
      <v-card class="mx-auto" max-width="1060" tile
        v-for="(country, index) in filteredCountries" :key="index">
        <v-list-item class="result" @click="openDetails(country)">
          <v-list-item-content>
            <v-list-item-title>{{country.name}}</v-list-item-title>
            <v-list-item-subtitle>{{country.native}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
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
  props: ['continent'],
  components: {
    Details
  },
  computed: {
  filteredCountries() {
    
    return this.countries.filter(country => country.continent.code === this.continent)
    }
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
      var query = `
                    query {
                        countries{
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
                      }`
      console.log(query)
      try {
          var result = await axios({
              method: "POST",
              url: "https://countries.trevorblades.com/",
              data: {
                  query: query
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
  .resultsBody {
    margin-left: 80px;
    margin-top: 60px;
    padding:10px 20px 10px 20px;
    text-align: left;
    font-size: 20pt;
  }
</style>
