<template
  ><div>
    <v-row>
      <titleHeader title="Más Información"></titleHeader>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="3" class="d-flex justify-center align-center "
        ><v-avatar size="100">
          <img
            :src="profileById.picture.large"
            :alt="profileById.name.title"
          /> </v-avatar
      ></v-col>

      <v-col cols="11" md="7">
        <l-map
        
          :zoom="zoom"
          :center="latLngOfProfile"
          style="height: 250px; width: 100%; z-index: 0;"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker :lat-lng="latLngOfProfile" :icon="icon" /> </l-map
      ></v-col>
      <v-col cols="12" md="2" class="d-flex justify-center align-center"
        ><v-btn @click="isFavProfile ? removeProfileFav() : addProfileFav()" icon :color="isFavProfile ? 'pink' : 'grey'" x-large>
          <v-icon>mdi-heart</v-icon>
        </v-btn></v-col
      >
    </v-row>
    <divider></divider>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h2 class="text-uppercase">Datos personales</h2>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center ">
        <p>Nombre: {{ profileById.name.first }} {{ profileById.name.last }}</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <p>Email: {{ profileById.email }}</p>
      </v-col>
    </v-row>
    
      <divider></divider>
    
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h2 class="text-uppercase">Datos de localización</h2>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <p>Ciudad: {{ profileById.name.first }} {{ profileById.name.last }}</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <p>Calle: {{ profileById.email }}</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center "
            ><h4 class="subtitle-">Números de teléfono</h4>
          </v-col>
          <v-col cols="12" class="d-flex justify-center align-center "
            ><p v-text="profileById.phone"></p
          ></v-col>
          <v-col cols="12" class="d-flex justify-center align-center ">
            <p v-text="profileById.cell"></p
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
    
    <divider></divider>
    <v-row class="ma-0 pa-0 ">
      <v-col cols="12" class="d-flex justify-center align-center ma-0 pa-0 ">
        <v-btn to="/"  dark fab color="primary" class="ma-0 pa-0 mb-4">
          <v-icon>mdi-arrow-left</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import divider from "../components/utilities/divider";
import title from '../components/utilities/title.vue'

export default {
  name: "Icon",
  components: {
    titleHeader:title,
    LMap,
    LTileLayer,
    LMarker,
    divider,
  },
  data() {
    return {
      zoom: 13,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors. <b>Saúl García</b>',

      icon: icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
  computed: {
    profileById() {
      return this.$store.getters.getProfileById(this.$route.params.id);
    },
    latLngOfProfile() {
      let coords = this.profileById.location.coordinates;
      return latLng(coords.latitude, coords.longitude);
    },
    isFavProfile(){
      return this.$store.getters.isFavProfile(this.$route.params.id)
    }
  },
  methods: {
    addProfileFav(){
      this.$store.commit('addProfileFav',this.profileById.login.uuid)
    },
    removeProfileFav(){
      this.$store.commit('removeProfileFav',this.profileById.login.uuid)
    }
  },
  
};
</script>
