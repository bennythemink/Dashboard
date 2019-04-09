<template>
    
<div id="nav_container">
    <div id="logo">
        <img src="../assets/svg/appscore.svg"/>
    </div>
    <nav id="main_nav">
        <div class="menu_item projects btn_link with_icon active">
            <span class="icon"><img src="../assets/svg/projects.svg"/></span>
            <span class="btn_title bold">Projects</span>
        </div>
        <div class="menu_item invoices with_icon btn_link">
                <span class="icon"><img src="../assets/svg/invoice.svg"/></span>
                <span class="btn_title bold">Invoices</span>
        </div>
    </nav>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
    /* @import '../assets/styles/global.css'; */

body{
    background: #FBFAFC;
    margin: 0;
    color:#313032;
    
}
*{
    box-sizing: border-box;
    position: relative;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    color:#313032;
    font-size: 12px;
}
#nav_container{
    padding: 40px;
    max-width: 240px;
    width: 240px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: #fff;
}
#logo{
    text-align: center;
    margin-bottom: 50px;
}
.btn_link{
    cursor: pointer;
    display: flex;
    align-items: center;
}
.btn_link.with_icon .btn_title{
    margin-left: 5px;
}
.menu_item{
    opacity: .2;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.menu_item:not(:last-of-type){
    margin-bottom: 20px;
}
.menu_item.active,
.menu_item:hover{
    opacity: 1;
}

</style>