<template>
  <v-row class="mt-2">
    <v-col cols="12" class="d-flex justify-center">
      <v-btn>
        click
      </v-btn>
    </v-col>
     <v-col cols="12">
       <v-card class="pa-2 ">
         <ageSlider ></ageSlider>
      <genderSlider></genderSlider>
       </v-card>
      
    </v-col>
  </v-row>
  
   
 
</template>


<script>
import ageSlider from '../components/filters/ageSlider'
import genderSlider from '../components/filters/genderSlider'
export default {
  components: {
    ageSlider,genderSlider
  },
 data: ()=>({

   
 })
}
</script>

<style>

</style>
