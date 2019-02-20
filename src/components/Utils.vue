<template>
    <div>
        <h2>Utils</h2>
        <Invoices />
        <Happiness />
    </div>
</template>

<script>

import Happiness from '@/components/Happiness.vue'
import Invoices from '@/components/Invoices.vue'

export default {
  name: 'utils',
  components: {
    Happiness,
    Invoices
  },
  data: {

  }
}
</script>

<style>

</style>
