<template>
    <div>
    <header>
        <h1>
            <span class="main_title bold">Projects</span>
            <span class="sub_title"><i class="fas fa-check icon"></i> Check what projects you want to appear on the front end.</span>
        </h1>
        <div>
            <input type="text" class="form_control" placeholder="Search for project..." id="search-projects">
        </div>
    </header>
    <section>
        <table>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>Project</th>
                    <th>Project Type</th>
                    <th colspan="2">Project Phase</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" id="0" class="checkbox"/>
                        <label for="0" class="custom_checkbox">
                            <i class="fas fa-check icon"></i> 
                            <span class="title">Samsung</span>
                        </label>
                    </td>
                    <td>
                        Samsung phase 4
                    </td>
                    <td>
                        App
                    </td>
                    <td>
                        Development
                    </td>  
                    <td>
                        <div class="editor_menu">
                            <img src="../assets/svg/ellipsis.svg"/>
                            <div class="pop_up_menu">
                                <div class="btn_link with_icon">
                                    <span class="icon"><img src="../assets/svg/edit.svg"/></span>
                                    <span class="btn_title">Edit</span>
                                </div>
                                <div class="btn_link with_icon">
                                    <span class="icon"><img src="../assets/svg/bin.svg"/></span>
                                    <span class="btn_title">Delete</span>
                                </div>
                            </div>
                        </div>
                    </td>  
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="1" class="checkbox"/>
                        <label for="1" class="custom_checkbox">
                            <i class="fas fa-check icon"></i> 
                            <span class="title">Samsung</span>
                        </label>
                    </td>
                    <td>
                        Samsung phase 4
                    </td>
                    <td>
                        App
                    </td>
                    <td>
                        Development
                    </td>  
                    <td>
                        <div class="editor_menu active">
                            <img src="../assets/svg/ellipsis.svg"/>
                            <div class="pop_up_menu">
                                <div class="btn_link with_icon">
                                    <span class="icon"><img src="../assets/svg/edit.svg"/></span>
                                    <span class="btn_title">Edit</span>
                                </div>
                                <div class="btn_link with_icon">
                                    <span class="icon"><img src="../assets/svg/bin.svg"/></span>
                                    <span class="btn_title">Delete</span>
                                </div>
                            </div>
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

<style>

</style>
