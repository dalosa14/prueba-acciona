<template>
  <v-row>
      <titleHeader></titleHeader>
    </v-row>
</template>

<script>
import title from '../components/utilities/title.vue'

export default {
  name: 'Home',
  components: {
    titleHeader:title
  }
}
</script>
