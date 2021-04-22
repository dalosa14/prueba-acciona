<template>
  <v-app>
    <appBar></appBar>

    <v-main>
      <tabsBar></tabsBar>
      <v-container><router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./components/appBar";
import tabsBar from "./components/tabsBar";

export default {
  name: "App",

  components: {
    appBar,
    tabsBar,
  },

  data: () => ({
    //
  }),
};
</script>
