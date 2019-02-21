<template>
    <div id="left_side" class="scroll">
        
      <!-- Loop through the projects in the store, pass them to the component for display -->
      <Panel :key="project.code" v-for="project in this.$store.getters.projects" :project="project" />

    </div>
</template>

<script>

import Panel from '@/components/Panel.vue'

export default {
  name: 'projectlist',
  components: {
    Panel
  },
  data: () => {
      return {
      }
  }
}
</script>

<style>

</style>
