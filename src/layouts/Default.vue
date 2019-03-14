<template>
    <div>
        <Banner />
        <slot /> <!-- The Dashboard will go here -->
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
    components: {
        Banner
    }
}
</script>

<style>

</style>
