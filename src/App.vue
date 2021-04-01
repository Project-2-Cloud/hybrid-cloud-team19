<template>
  <div id="app">
    
    <NavHeader />
    <!--<caroussel />-->
    <router-view/>
    <!--<iconbox/>-->

    
  </div>
</template>
	
<script>
/*import caroussel from "@/caroussel.vue"*/
import NavHeader from "@/NavHeader.vue"
/*import iconbox from "@/iconbox.vue"*/
export default {
  components: {
    NavHeader,
    /*caroussel,
    iconbox*/
  },
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
