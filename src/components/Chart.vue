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
        }
    },
    computed: {
        determineBackgroundColour: function () {
            if (this.percent < 50) {
                return "background_blue"
            } 
            else if (this.percent < 75) {
                return "background_amber"
            }
            else {
                return "background_red"
            }
        }
    }
}
</script>

<style>

</style>
