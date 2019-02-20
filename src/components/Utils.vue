<template>
    <div>
        <h2>Utils</h2>
        <Utilisation />
        <Invoices />
        <Happiness />
    </div>
</template>

<script>

import Happiness from '@/components/Happiness.vue'
import Invoices from '@/components/Invoices.vue'
import Utilisation from '@/components/Utilisation.vue'

export default {
  name: 'utils',
  components: {
    Happiness,
    Invoices,
    Utilisation
  },
  data: {

  }
}
</script>

<style>

</style>
