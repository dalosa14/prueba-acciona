<template>
  <v-col
    cols="12"
    class="d-flex justify-center align-center mt-3 text-uppercase"
  >
    <h1 v-text="title"></h1>
  </v-col>
</template>

<script>
export default {
  props: ["title"],
};
</script>
