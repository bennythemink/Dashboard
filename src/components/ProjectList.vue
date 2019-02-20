<template>
    <div id="left_side" class="scroll">
        
        <Panel />
    </div>
</template>

<script>

import Panel from '@/components/Panel.vue'

export default {
  name: 'projectlist',
  components: {
    Panel
  },
  data: {
      projects: [
          "Paspaley",
          "Samsung"
      ]
  }
}
</script>

<style>

</style>
