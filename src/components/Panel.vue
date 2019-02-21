<template>
    <div class="panel">
        <header>
            <div class="status_bar background_green"></div>
            <div class="status">
                <span class="status_title color_green">On Track</span><span class="status_signal background_green"></span>
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
                    <span>8 Hours</span>
                </div>
            </div>
            <div class="form_group">
                        <div class="form_title">
                            <span class="light">Project Type:</span>
                        </div>
                        <div class="form_value">
                            <span class="icon app">App</span>
                        </div>
                    </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Due Date:</span>
                </div>
                <div class="form_value">
                    <span>Friday, 17th May 2019</span>
                    <i class="far fa-calendar"></i>
                    <input type="date" class="form_control" id="due_date"/>
                </div>
            </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Project Status:</span>
                </div>
                <div class="form_value">
                    <span class="icon design">Design</span>
                    <i class="fas fa-angle-down"></i>
                    <select class="form_control" id="project_status">
                        <option value="0" selected>Design</option>
                        <option value="1">Dev</option>
                        <option value="2">Beta</option>
                        <option value="3">UAT</option>
                    </select>
                </div>
            </div>
            <div class="form_group">
                <div class="form_title">
                    <span class="light">Client Happiness:</span>
                </div>
                <div class="form_value">
                    <span><i class="far fa-smile color_green"></i></span>
                    <i class="fas fa-angle-down"></i>
                    <select class="form_control" id="client_happiness">
                        <option value="0" selected>Happy</option>
                        <option value="1">Nuteral</option>
                        <option value="2">Angry</option>
                    </select>
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
