<template>
    
    <div class="bar_chart">
        <div class="bar_bg background_grey"></div>
        <div class="bar_fill" v-bind:class="determineBackgroundColour" :style="{ width: percent + '%' }"></div>
    </div>
        
</template>

<script>
export default {

    props: {
        percent: Number
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
