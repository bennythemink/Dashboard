<template>
    <div>
    <header>
        <h1>
            <span class="main_title bold">Projects</span>
        </h1>
        <div>
            <!-- <input type="text" class="form_control" placeholder="Search for project..." id="search-projects"> -->
            <button type="submit" class="btn btn_primary">
                <span class="btn_title">Add Project</span>
            </button>
        </div>
    </header>
    <section>
        <table>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>Project</th>
                    <th>Project Type</th>
                    <th colspan="3">Project Phase</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project,index) in this.$store.getters.projects" :key="index" >
                    <td>
                        <span class="title">{{ project.client }}</span>
                    </td>
                    <td>
                        {{ project.name }}
                    </td>
                    <td>
                        {{ project.projectType }}
                    </td>
                    <td>
                        {{ project.projectStage }}
                    </td>  
                    <td>
                        <div class="btn_link with_icon">
                            <!-- <router-link to="/admin/projects/edit"> -->
                            <router-link :to="{ name: 'editProject', props: { project: project } }">
                                <span class="icon"><img src="../assets/svg/edit.svg"/></span>
                                <span class="btn_title">Edit</span>
                            </router-link>
                        </div>
                    </td>
                    <td>
                        <div class="btn_link with_icon">
                            <span class="icon"><img src="../assets/svg/bin.svg"/></span>
                            <span class="btn_title">Delete</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import "./../assets/styles/global.css";
</style>
