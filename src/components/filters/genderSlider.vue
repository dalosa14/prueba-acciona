<template>
  <v-row>
    <v-col cols="4" class="d-flex  align-center justify-center">
      <h4>Género</h4>
    </v-col>
    <v-col cols="8" class="d-flex  align-center justify-center">
      <v-slider
        :tick-labels="genders"
        v-on:mouseup="setGenderFilter"
        v-model="selectedGender"
        min="0"
        max="2"
        ticks="always"
        tick-size="4"
      >
        <template v-slot:thumb-label="props">
          <v-icon dark>
            {{ genderIcon(props.value) }}
          </v-icon>
        </template>
      </v-slider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    selectedGender: 1,
    genders: ["Hombre", "cualquiera", "Mujer"],
    genderIcons: ["mdi-human-male", "mdi-circle-small", "mdi-human-female"],
  }),
  methods: {
    genderIcon(index) {
      return this.genderIcons[index];
    },
    setGenderFilter() {
      let gender;
      switch (this.selectedGender) {
        case 0:
          gender = "male";
          break;
        case 1:
          gender = "any";
          break;
        case 2:
          gender = "female";
          break;
      }
      this.$store.commit("setGenderFilter", gender);
    },
  },
};
</script>

<style></style>
