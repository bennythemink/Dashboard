<template>
    <div id="right_side">
        <OffsiteStaff />
        <StaffUtilisation />
        <Invoices />
    </div>
</template>

<script>

import Invoices from '@/components/Invoices.vue'
import StaffUtilisation from '@/components/StaffUtilisation.vue'
import OffsiteStaff from '@/components/OffsiteStaff.vue'

export default {
  name: 'utils',
  components: {
    Invoices,
    StaffUtilisation,
    OffsiteStaff
  },
  data: () => {
      return {
          
      }
  }
}
</script>

<style>

</style>
