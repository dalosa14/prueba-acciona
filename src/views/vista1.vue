<template>
  <v-row class="mt-2">
    <v-col cols="12" class="d-flex justify-center">
      <v-btn @click="getProfiles">
        click
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class=" pa-4 ">
        <v-row>
          <v-col cols="12"><ageSlider></ageSlider></v-col>
          <v-col cols="12"> <genderSlider></genderSlider></v-col>
          <v-col cols="12"> <nationSelector></nationSelector></v-col>
        </v-row>
      </v-card>
      <divider></divider>
      <v-row>
        <v-col cols="12">
          <profilesDataTable></profilesDataTable>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ageSlider from "../components/filters/ageSlider";
import genderSlider from "../components/filters/genderSlider";
import nationSelector from "../components/filters/nationSelector";
import profilesDataTable from "../components/profilesDataTable";
import divider from "../components/utilities/divider";
export default {
  components: {
    ageSlider,
    genderSlider,
    nationSelector,
    profilesDataTable,
    divider,
  },
  data: () => ({}),
  methods: {
    getProfiles() {
      this.$store.dispatch("getProfiles");
    },
  },
};
</script>

<style></style>
