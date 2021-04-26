<template>
  <v-row class="mt-2">
    <titleHeader title="Consultas"></titleHeader>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn @click="getProfiles" color="accent">
        Traer perfiles
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
          <profilesDataTable :moreInfo="true"></profilesDataTable>
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
import title from "../components/utilities/title.vue";

export default {
  components: {
    ageSlider,
    genderSlider,
    nationSelector,
    profilesDataTable,
    divider,
    titleHeader: title,
  },
  data: () => ({}),
  methods: {
    getProfiles() {
      this.$store.dispatch("getProfiles");
    },
    getNationalities() {},
  },
};
</script>

<style></style>
