<template>

      <v-row class="d-flex justify-center align-center">
          <v-col cols="2">
              <h4>Edad</h4>
          </v-col>
        <v-col cols="10" >
          <v-range-slider
            v-on:mouseup="setAgeFilter"
            v-model="range"
            :max="max"
            :min="min"
            hide-details
            class="align-center"
          >
            <template v-slot:thumb-label="props">
              {{ props.value }}
            </template>
          </v-range-slider>
        </v-col>
      </v-row>


</template>
<script>
export default {
  data: () => ({
    min: 0,
    max: 100,
    range: [0, 50],
    
  }),
  methods:{
      setAgeFilter(){
          this.$store.commit('setAgeFilter',this.range)
      }
  }
};
</script>

<style></style>
