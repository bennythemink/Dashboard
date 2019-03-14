<template>
    <div class="panel">
        <header>
            <div class="status_bar" :class="determineStatusBackgroundColour"></div>
            <div class="status">
                <span class="status_title" :class="determineStatusColour">{{ project.onTrack }}</span><span class="status_signal" :class="determineStatusBackgroundColour"></span>
            </div>
            <div class="heading">
                <h4 class="light">{{ project.client }}</h4>
                <h3 class="bold">{{ project.name }}</h3>
            </div>
        </header>
        <section>
            <div class="chart">
                <div class="top_title">
                    <span class="title bold color_blue">{{ project.hoursUsed }}</span><span class="sub_title">Used</span>
                </div>

                <!-- Custom Chart component -->
                <Chart :percent="percentageComplete" />    

                <div class="bottom_title">
                    <span class="title bold">{{ project.hoursAllocated }}</span><span class="sub_title">Alocated</span>
                </div>
            </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Billable:</span>
                </div>
                <div class="form_value">
                    <span>{{ project.billableHours }} Hours</span>
                </div>
            </div>
            <div class="form_group">
                        <div class="form_title">
                            <span class="light">Project Type:</span>
                        </div>
                        <div class="form_value">
                            <span class="icon" :class="project.projectType.toLowerCase()">{{ project.projectType }}</span>
                        </div>
                    </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Due Date:</span>
                </div>
                <div class="form_value">
                    <span>{{ project.dueDate }}</span>
                </div>
            </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Project Status:</span>
                </div>
                <div class="form_value">
                    <span class="icon" :class="determineProjectStageIcon">{{ project.projectStage }}</span>
                </div>
            </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Client Happiness:</span>
                </div>
                <div class="form_value">
                    <span><i class="far" :class="determineHappiness(project.clientHappiness)"></i></span>
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
computed: {
    percentageComplete () {
        return (this.project.hoursUsed / this.project.hoursAllocated) * 100
    },
    determineStatusBackgroundColour () {
        switch (this.project.onTrack.toLowerCase()) {
            case "on track":
                return "background_green"
            case "behind":
                return "background_amber"
            case "on hold":
                return "background_red"
            default:
                return "background_amber"
        }
    },
    determineStatusColour () {
        switch (this.project.onTrack.toLowerCase()) {
            case "on track":
                return "color_green"
            case "behind":
                return "color_amber"
            case "on hold":
                return "color_red"
            default:
                return "color_amber"
        }
    },
    determineProjectStageIcon () {
        switch (this.project.projectStage) {
            case "N/A":
                return "na"
            default:
                return this.project.projectStage.toLowerCase()
        }
    }
},
methods: {
    determineHappiness(reading) {
        switch (reading.toLowerCase()) {
            case "unhappy": 
                return "fa-angry color_red"
            case "moderate":
                return "fa-meh color_amber"
            case "happy":
                return "fa-smile color_green"
            default:
                return "fa-meh color_amber"
        }
    }
},
props: {
    project: {
        type: Object,
        required: true
    }
},
}
</script>

<style>

</style>
