<template>

      <v-row >
          <v-col cols="4" class="d-flex  align-center justify-center">
              <h4>Edad</h4>
          </v-col>
        <v-col cols="8" class="d-flex  align-center justify-center">
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
