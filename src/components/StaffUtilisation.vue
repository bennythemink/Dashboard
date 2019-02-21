<template>
    
    <div class="panel">
            <header>
                <div class="heading">
                    <h3 class="bold">Staff Utilisation</h3>
                </div>
            </header>
            <section>
                <div class="scroll" style="max-height: 250px">

                    <div v-for="staff in this.$store.getters.staff" :key="staff.id" class="chart"> 
                        <div class="top_title">
                            <span class="title user">{{ staff.title }}</span><span class="sub_title bold percentage" :class="determineTextColour(staff.percentage)">{{ staff.percentage}}%</span>
                        </div>
                        
                        <Chart :percent="staff.percentage" :flipped="true"/>
                    </div>

                </div>
            </section>
        </div>

</template>

<script>
import Chart from '@/components/Chart.vue'

export default {

components: {
    Chart
},
methods: {
    
    determineTextColour: (percentage) => {

        if (percentage < 50) {
            return "color_red"
        } else if (percentage < 75) {
            return "color_amber"
        } else {
            return "color_blue"
        }
    }
}

}
</script>

<style scoped>

</style>
