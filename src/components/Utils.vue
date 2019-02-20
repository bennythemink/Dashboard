<template>
    <div>
        <h2>Utils</h2>
        <StaffUtilisation />
        <Invoices />
        <Happiness />
    </div>
</template>

<script>

import Happiness from '@/components/Happiness.vue'
import Invoices from '@/components/Invoices.vue'
import StaffUtilisation from '@/components/StaffUtilisation.vue'

export default {
  name: 'utils',
  components: {
    Happiness,
    Invoices,
    StaffUtilisation
  },
  data: {

  }
}
</script>

<style>

</style>
