<template>
    
    <div class="panel" id="utilisation">
            <header>
                <div class="heading">
                    <h3 class="bold">Staff Utilisation</h3>
                </div>
            </header>
            <section>
                <div class="scroll">

                    <div v-for="(staff,index) in this.$store.getters.staff" :key="staff.id" class="chart"> 
                        <div class="top_title">
                            <span class="title user">{{ staff.title }}</span><span class="sub_title bold percentage color_blue">{{ staff.percentage}}%</span>
                        </div>

                        <Chart :percent="staff.percentage" :usePinkColour="usePinkColour(index)"/>
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
    usePinkColour: (index) => {
        return (index === 0) ? true : false
    }
}

}
</script>

<style scoped>

</style>
