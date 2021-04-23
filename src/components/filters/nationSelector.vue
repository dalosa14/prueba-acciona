<template>
  <v-row>
      <v-col cols="4" class="d-flex  align-center justify-center">
          <h4>Nacionalidad</h4>
      </v-col>
    <v-col cols="8" class="d-flex  align-center justify-center">
      <v-select
          v-model="nat"
          :items="allNationalities"
          menu-props="auto"
          
          label="Selecciona las nacionalidades a mostrar."
          hide-details
          prepend-icon="mdi-map"
          multiple
        ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
      nat:[],
      
  }),
  methods: {
      genderIcon(index){
          return this.genderIcons[index]
      }
  },
  computed:{
    allNationalities(){
      return this.$store.getters.getAllNationalities;
    }
  }
};
</script>

<style></style>
