<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :footer-props="{
        itemsPerPageOptions: [5, 10, 50, 100],
      }"
      :headers="headers"
      :items="moreInfo ? getAllProfiles : getFavProfiles"
      :search="search"
      item-key="id.value"
    >
    <template v-slot:item.gender="{ item }">
      
        <v-tooltip :open-on-click="true" :open-on-hover="false" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" :color="item.gender == 'male' ? 'blue':'pink'">
              <v-icon >mdi-human-{{item.gender}}</v-icon>
            </v-btn>
          </template>
          <span>{{ item.gender == 'male' ? 'Hombre':'Mujer' }}</span>
        </v-tooltip>
      </template>
      <template v-slot:item.nat="{ item }">
        <v-tooltip :open-on-click="true" :open-on-hover="false" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <CountryFlag :country="item.nat"></CountryFlag>
            </v-btn>
          </template>
          <span>{{ item.nat }}</span>
        </v-tooltip>
      </template>
      <template v-slot:item.bDate="{ item }">
        {{ convertDate(item.dob.date) }}
      </template>
      <template v-slot:item.rDate="{ item }">
        {{ convertDate(item.registered.date) }}
      </template>
      <template v-slot:item.mDetalles="{ item }" v-if="moreInfo">
        <v-btn x-small color="accent" :to="`/profile/${item.login.uuid}`">
          Más detalles
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import CountryFlag from "vue-country-flag";
export default {
  props: {
    moreInfo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CountryFlag,
  },
  data: () => ({
    headers: [
      { text: "Género", value: "gender" },
      { text: "Nombre", value: "name.first" },
      { text: "Email", value: "email" },
      { text: "Nacionalidad", value: "nat" },
      { text: "F. Nacimiento", value: "bDate" },
      { text: "F. Registro", value: "rDate" },
    ],
    search: "",
  }),
  methods: {
    convertDate(rawDate) {
      return new Date(rawDate).toLocaleDateString('es');
    },
    natCodeToFlag(natCode) {
      return natCode;
    },
    addHeaderMoreInfo() {
      this.headers.push({ text: "Más detalles", value: "mDetalles" });
    },
  },
  computed: {
    getAllProfiles() {
      return this.$store.getters.getAllProfilesWithFilters;
    },
    getFavProfiles(){
            return this.$store.getters.getFavProfiles;

    }
  },
  mounted() {
    if (this.moreInfo) this.addHeaderMoreInfo();
  },
};
</script>
