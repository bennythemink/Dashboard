<template>
    <!-- displays a progress chart horizontally -->
    <div class="bar_chart">
        <div class="bar_bg background_grey"></div>
        <div class="bar_fill" :class="determineBackgroundColour" :style="{ width: percent + '%' }"></div>
    </div>
        
</template>

<script>
export default {

    props: {
        percent: {
            type: Number,
            required: true
        },
        usePinkColour: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        determineBackgroundColour: function () {
            return (this.usePinkColour) ? "background_pink" : "background_blue"
        }
    }
}
</script>

<style>

</style>
