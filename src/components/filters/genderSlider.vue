<template>
  <v-row>
      <v-col cols="4" class="d-flex  align-center justify-center">
          <h4>Género</h4>
      </v-col>
    <v-col cols="8" class="d-flex  align-center justify-center">
      <v-slider
        :tick-labels="genders"
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
      selectedGender:0,
      genders:['Hombre','cualquiera','Mujer'],
      genderIcons:[
          'mdi-human-male',
          'mdi-circle-small',
          'mdi-human-female',
      ]
  }),
  methods: {
      genderIcon(index){
          return this.genderIcons[index]
      }
  },
};
</script>

<style></style>
