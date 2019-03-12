<template>
    <div class="panel">
        <header>
            <div class="status_bar" :class="determineStatusBackgroundColour"></div>
            <div class="status">
                <span class="status_title" :class="determineStatusColour">{{ determineStatus }}</span><span class="status_signal" :class="determineStatusBackgroundColour"></span>
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
                            <span class="icon" :class="determineProjectType">{{ determineProjectType }}</span>
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
                    <span class="icon" :class="determineProjectStageIcon">{{ determineProjectStage }}</span>
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
        switch (this.project.onTrack) {
            case 0:
                return "background_green" // on track
            case 1:
                return "background_amber" // behind
            case 2:
                return "background_red" // on hold
            default:
                return "background_amber"
        }
    },
    determineStatusColour () {
        switch (this.project.onTrack) {
            case 0:
                return "color_green" // on track
            case 1:
                return "color_amber" // behind
            case 2:
                return "color_red" // on hold
            default:
                return "color_amber"
        }
    },
    determineStatus () {
        switch (this.project.onTrack) {
            case 0:
                return "On Track" 
            case 1:
                return "Behind" 
            case 2:
                return "On Hold" 
            default:
                return "N/A"
        }
    },
    determineProjectType () {
        switch (this.project.projectType) {
            case 0:
                return "app"
            case 1:
                return "website"
            default:
                return "N/A"
        }
    },
    determineProjectStage () {
        switch (this.project.projectStage) {
            case 0:
                return "SOW"
            case 1:
                return "Design"
            case 2:
                return "Dev"
            case 3:
                return "Beta"
            case 4:
                return "UAT"
            case 5:
                return "Warranty"
            default:
                return "N/A"
        }
    },
    determineProjectStageIcon () {
        switch (this.project.projectStage) {
            case 0:
                return "sow"
            case 1:
                return "design"
            case 2:
                return "development"
            case 3:
                return "beta"
            case 4:
                return "UAT"
            case 5:
                return "warranty"
            default:
                return "na"
        }
    }
},
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
