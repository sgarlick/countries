<template>
  <div class="sidebar">
    <v-navigation-drawer expand-on-hover absolute height="550px" mini-variant-width="80px" mobileBreakPoint="320"
>
        <v-list-item></v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-icon><img src="../assets/continents.png"/></v-list-item-icon>
          <v-list-item-content>
            
            <v-list-item-title class="title">
              Continents
            </v-list-item-title>
            <v-list-item-subtitle>
              Choose Continent 
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              to refine Results
            </v-list-item-subtitle>
            
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="continent in continents"
            :key="continent.code"
            link>
            <v-list-item-icon v-on:click="changeCont(continent)">
              <v-icon>{{ continent.code }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content v-on:click="changeCont(continent)">
              <v-list-item-title>{{ continent.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'sidebar',
  props: ['continent'],
  methods: {
    // Change continent
    continentsFilter(continent) {
      console.log(continent.code)
    },
    changeCont(continent) {
      console.log(continent.code)
        this.$emit('changeCont', continent.code);
      }
  },
  data() {
            return {
                continents: []
            };
        },
  async mounted() {
      try {
          var result = await axios({
              method: "POST",
              url: "https://countries.trevorblades.com/",
              data: {
                  query: `
                      {
                        continents {
                          name,
                           code
                        }
                      }
                  `
              }
          });
          this.continents = result.data.data.continents;
      } catch (error) {
          console.error(error);
      }
  }
  
}
</script>
