<template>
<main>
    <header>
        <h1>
            <span class="main_title bold">Add Project</span>
        </h1>
    </header>
    <section>
        <form @submit.prevent="processForm">
            <div class="form_group">
                <label>Client</label>
                <!-- <input type="text" :value="project.client" class="form_control" disabled> -->
                <input type="text" class="form_control" v-model="client">
            </div>
            <div class="form_group">
                <label>Project Title</label>
                <input type="text" class="form_control" v-model="name">
            </div>
            <div class="form_group">
                <label>Due Date</label>
                <!-- <input type="date" :placeholder="project.dueDate" class="form_control" required> -->
                <input type="date" placeholder="dd/mm/yyyy" class="form_control" required>
            </div>
            <div class="form_group">
                <label>Project Status</label>
                <div class="form_sub_group">
                        <div>
                            <input type="radio" id="on_track" name="status_group" class="radio" checked>
                            <label for="on_track" class="custom_radio on_track btn_link with_icon">
                                <i class="fas fa-circle icon on_track color_green"></i> 
                                <span class="btn_title color_green">On Track</span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="on_hold" name="status_group" class="radio">
                            <label for="on_hold" class="custom_radio on_hold btn_link with_icon">
                                <i class="fas fa-circle icon on_hold color_amber"></i> 
                                <span class="btn_title color_amber">On Hold</span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="behind" name="status_group"  class="radio">
                            <label for="behind" class="custom_radio behind btn_link with_icon">
                                <i class="fas fa-circle icon behind color_red"></i> 
                                <span class="btn_title color_red">Behind</span>
                            </label>
                        </div>
                </div>
            </div>
            <div class="form_group">
                <label>Project Type</label>
                <div class="form_sub_group">
                        <div>
                            <input type="radio" id="app" name="type_group" class="radio" checked>
                            <label for="app" class="custom_radio app btn_link with_icon">
                                <img src="../assets/svg/app-radio.svg"/>
                                <span class="btn_title">App</span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="website" name="type_group" class="radio">
                            <label for="website" class="custom_radio website btn_link with_icon">
                                <img src="../assets/svg/website-radio.svg"/>
                                <span class="btn_title">Website</span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="misc" name="type_group"  class="radio">
                            <label for="misc" class="custom_radio misc btn_link with_icon">
                                <img src="../assets/svg/misc-radio.svg"/>
                                <span class="btn_title">Misc</span>
                            </label>
                        </div>
                </div>
            </div>
            <div class="form_group">
                <label>Client Happiness</label>
                <div class="form_sub_group">
                        <div>
                            <input type="radio" id="happy" name="happiness_group" class="radio" checked>
                            <label for="happy" class="custom_radio happy btn_link">
                                <i class="far fa-smile color_green icon"></i>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="meh" name="happiness_group" class="radio">
                            <label for="meh" class="custom_radio meh btn_link">
                                <i class="far fa-meh color_amber icon"></i>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="angry" name="happiness_group"  class="radio">
                            <label for="angry" class="custom_radio angry btn_link">
                                <i class="far fa-angry color_red icon"></i>
                            </label>
                        </div>
                </div>
            </div>
            <div class="form_group">
                <button type="button" class="btn btn_secondary">
                    <span class="btn_title">Cancel</span>
                </button>
                <button type="submit" class="btn btn_primary">
                    <span class="btn_title">Save</span>
                </button>
            </div>
        </form>
    </section>
</main>
</template>

<script>
import { API } from '../classes/API.js';
import store from '../store';

export default {
    props: { 
        project: {
            type: Object,
            required: false
        }
    },
    data: {
        client: '',
        name: ''
    },
    methods: {
        processForm: function() {
            const newProject = {

            };

            api.createProject(newProject).then((data) => {
                this.$store.addProject(data)
            })
        }
    },
    created() {
        // console.log('project = '+this.project.client);
    }
}

</script>

<style>

</style>
