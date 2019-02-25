<template>
    <div id="right_side">
        <StaffUtilisation />
        <Invoices />
        <Happiness />
    </div>
</template>

<script>

// import Happiness from '@/components/Happiness.vue'
import Invoices from '@/components/Invoices.vue'
import StaffUtilisation from '@/components/StaffUtilisation.vue'

export default {
  name: 'utils',
  components: {
    // Happiness,
    Invoices,
    StaffUtilisation
  },
  data: () => {
      return {
          
      }
  }
}
</script>

<style>

</style>
