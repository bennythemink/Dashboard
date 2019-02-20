<template>
    <div class="panel">
        <header>
            <div class="status_bar background_green"></div>
            <div class="status">
                <span class="status_title color_green">On Track</span><span class="status_signal background_green"></span>
            </div>
            <div class="heading">
                <h4 class="light">Type Here</h4>
                <h3 class="bold">Title Here</h3>
            </div>
        </header>
        <section>
            <div class="chart">
                <div class="top_title">
                    <span class="title bold color_blue">50</span><span class="sub_title">Used</span>
                </div>
                <div class="bar_chart">
                    <div class="bar_bg background_grey"></div>
                    <div class="bar_fill background_blue" style="width:25%"></div>
                </div>
                <div class="bottom_title">
                    <span class="title bold">200</span><span class="sub_title">Alocated</span>
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
export default {

}
</script>

<style>

</style>
