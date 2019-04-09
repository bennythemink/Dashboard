<template>
  <div id="app">
    <component :is="layout" >
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    }
  }
}

</script>

<style>
  @import "https://use.typekit.net/mof2inc.css";
  @import "https://use.fontawesome.com/releases/v5.7.2/css/all.css";
</style>
