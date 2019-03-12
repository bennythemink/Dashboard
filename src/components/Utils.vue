<template>
    <div id="right_side">
        <StaffUtilisation />
        <Invoices />
    </div>
</template>

<script>

import Invoices from '@/components/Invoices.vue'
import StaffUtilisation from '@/components/StaffUtilisation.vue'

export default {
  name: 'utils',
  components: {
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
