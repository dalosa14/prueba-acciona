<template>
  <v-row>
      <v-col cols="4" class="d-flex  align-center justify-center">
          <h4>Nacionalidad</h4>
      </v-col>
    <v-col cols="8" class="d-flex  align-center justify-center">
      <v-select
          v-model="nats"
          :items="nationObjToArray"
          item-value="code"
          item-text="nation"
          label="Selecciona las nacionalidades a mostrar."
          hide-details
          prepend-icon="mdi-map"
          multiple
        >
        
        <template v-slot:item="{item}">
   <CountryFlag :country="item.code" class="mr-3"></CountryFlag>   {{item.nation}}
  </template>   
        </v-select>
    </v-col>
  </v-row>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components:{
    CountryFlag
  },
  data: () => ({
      nats:[],
      
  }),
  methods: {
      genderIcon(index){
          return this.genderIcons[index]
      },
      
  },
  computed:{
    allNationalities(){
      
      
      return this.$store.getters.getAllNationalities;
    },

    nationObjToArray(){
      let allNationalities = this.allNationalities
        let nations = [] 
        for(const nation in allNationalities){
          nations.push({
            nation: allNationalities[nation],
            code: nation
          })
        }
        return nations

      }
  },
  watch:{
    nats(){
      this.$store.commit('setSelectedNats',this.nats)
    }
  }
};
</script>

<style></style>
