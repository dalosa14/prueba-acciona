<template>
  <div>
    <v-row>
      <titleHeader title="favoritos"></titleHeader>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="10" class="d-flex justify-center align-center">
        <profilesDataTable></profilesDataTable>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <VueJsonToCsv :json-data="transformData(getFavProfiles)"
          ><v-btn color="accent" :disabled="!getFavProfiles.length"
            >Descargar perfiles favoritos</v-btn
          ></VueJsonToCsv
        >
      </v-col>
    </v-row>
    <divider></divider
    ><v-row class="d-flex justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h2>Guardar favoritos en el servidor</h2>
      </v-col>
      <v-col cols="10" class="d-flex justify-center align-center">
        <v-text-field label="Nombre de la lista de perfiles" v-model="listName">
        </v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-btn
          color="secondary"
          :disabled="!getFavProfiles.length || listName == ''"
          @click="sendFavProfilesList"
          >Descargar perfiles favoritos</v-btn
        >
      </v-col></v-row
    >
    <v-row class="d-flex justify-center align-center" v-if="popUp.value">
      <v-col class="d-flex justify-center align-center" cols="8">
        <v-alert :type="popUp.type">{{ popUp.text }}</v-alert></v-col
      >
    </v-row>
  </div>
</template>

<script>
import title from "../components/utilities/title.vue";
import profilesDataTable from "../components/profilesDataTable";
import VueJsonToCsv from "vue-json-to-csv";
import divider from "../components/utilities/divider";

export default {
  name: "Home",
  data: () => ({ listName: "", popUp: { value: false, text: "", type: "" } }),
  components: {
    VueJsonToCsv,
    titleHeader: title,
    profilesDataTable,
    divider,
  },
  methods: {
    transformData(data) {
      return data.reduce((acc, profile) => {
        let dataArray = {
          género: profile.gender,
          nombre: profile.name.first,
          email: profile.email,
          nacionalidad: profile.nat,
          fecha_de_nacimiento: profile.dob.date,
          fecha_de_registro: profile.registered.date,
        };
        acc.push(dataArray);
        return acc;
      }, []);
    },
    sendFavProfilesList() {
      try {
        this.axios.post(
          "https://prueba-acciona-backend-saul.onrender.com/addFavProfilesList",
          {name:this.listName,data:this.transformData(this.getFavProfiles)}
        );
        this.popUp.type = "success";
        this.popUp.text = "Lista guardada correctamente";
        this.popUp.value = true;
      } catch (error) {
        this.popUp.type = "error";
        this.popUp.text = "Ha ocurrido un problema con el servidor";
        this.popUp.value = true;
      }
    },
  },
  computed: {
    getFavProfiles() {
      return this.$store.getters.getFavProfiles;
    },
    valorPopUp() {
      return this.popUp.value;
    },
  },
  watch: {
    valorPopUp() {
      setTimeout(() => {
        this.popUp.value = false;
      }, 3000);
    },
  },
};
</script>
