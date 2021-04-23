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
      itemsPerPageOptions:[5,10,50,100]
    }"
      :headers="headers"
      :items="getAllProfiles"
      :search="search"
    >
    <template v-slot:item.bDate="{ item }" >
        {{ convertDate(item.dob.date) }}
      
    </template>
    <template v-slot:item.rDate="{ item }" >
        {{ convertDate(item.registered.date) }}
      
    </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
    data: () => ({
         headers: [
          
          { text: 'Género', value: 'gender' },
          {
            text: 'Nombre',
            align: 'start',
            filterable: true,
            value: 'name.first',
          },
          { text: 'Email', value: 'email' },
          { text: 'Nacionalidad', value: 'nat' },
          { text: 'F. Nacimiento', value: 'bDate' },
          { text: 'F. Registro', value: 'rDate' },
        ],
        search:''
    }),
    methods:{
      convertDate(rawDate){
        return new Date(rawDate).toLocaleDateString()
      }
    },
    computed:{
        getAllProfiles(){
            return this.$store.getters.getAllProfiles
        }
    }
}
</script>