<template>
    <div>
        
        <div class="panel table"  id="staff_happiness">
            <header>
                <div class="heading">
                    <h3 class="bold">Staff Happiness</h3>
                </div>
            </header>
            
                <table>
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>
                                Previous Month
                            </th>
                            <th>
                                This Month
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="happiness in this.$store.getters.happiness" :key="happiness.id">
                            <td>
                                <div class="bold">
                                    {{ happiness.title }}
                                </div>
                            </td>
                            <td>
                                <i class="far" :class="determineHappiness(happiness.lastMonth)"></i>
                            </td>
                            <td>
                                <i class="far" :class="determineHappiness(happiness.thisMonth)"></i>
                            </td>
                        </tr>
                                                              
                    </tbody>
                </table>

        </div>

    </div>
</template>

<script>
export default {

methods: {
    determineHappiness(reading) {
        switch (reading) {
            case 0: 
                return "fa-angry color_red"
            case 1:
                return "fa-meh color_amber"
            case 2:
                return "fa-smile color_green"
            default:
                return "fa-meh color_amber"
        }
    }
}

}
</script>

<style scoped>

</style>
