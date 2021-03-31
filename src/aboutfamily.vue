<template>
  <div id="app">
    <NavHeader />
    <router-view/>
  </div>
</template>

<script>
import NavHeader from "@/NavHeader.vue"
export default {
  components: {
    NavHeader,
    caroussel
  },
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  }
}
</script>