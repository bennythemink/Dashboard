<template>
    <div>
        <ProjectList />
        <Utils />
    </div>
</template>

<script>

import Utils from '@/components/Utils.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'dashboard',
  components: {
    ProjectList,
    Utils
  },
  data: () => {
      return {

      }
  }
}
</script>

<style>

body{
    background: #FBFAFC;
    padding: 20px;
    margin: 0;
}
*{
    box-sizing: border-box;
    position: relative;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#313032;
}

.bold{
    font-family: futura-pt-bold, sans-serif;
    font-weight: 700;
    font-style: normal;
}
.light{
    font-weight: 300; 
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
}

/*** Header ***/
header{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 15px;
    background: #fff;
    font-size: 12px;
}
.heading h4{
    margin-bottom: 4px;
}
.status_bar{
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
}
.status{
    position: absolute;
    top: 20px;
    right: 15px;
    left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 10px;
}

.status_signal{
    margin-left: 8px;
    height: 6px;
    flex: 0 0 6px;
    border-radius: 50%;
    background: #313131;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
}

/*** Section ***/
section{
    border-top: 1px solid #FBFAFC;
    padding: 15px; 
    font-size: 11px;   
}
section.table_container{
    padding-top: 0;
}



/*** Bar Chart ***/
.chart:not(:last-of-type){
    margin-bottom: 15px;
}
.top_title{
    margin-bottom: 5px;
    text-align: left;
}

.bottom_title{
    margin-top: 5px;
    text-align: right;
}

.title{
    padding-right: 5px;
}


.bar_chart{
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}
.bar_bg,
.bar_fill{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.bar_bg{
    width: 100%;
}
.bar_fill{
    border-radius: 5px; 
}


/*** Form Group ***/
.form_group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 0;
}
.form_title{
    margin-right: 10px; 
}
.form_value{
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
}
.form_value .form_control{
    width: 100%;
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    outline: none;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.form_value label{
    right: 0;
}
.form_value>i{
    color: #9B9B9B;
    width: 15px;
    text-align: center;
    cursor: pointer;
}
.form_value .icon{
    background-position: left center;
    background-repeat: no-repeat;
    background-size: auto auto;
    padding-left: 20px;
    height: 15px;
}
.icon.design{
    background-image: url(../assets/svg/design.svg);
}
.icon.development{
    background-image: url(../assets/svg/development.svg);
}
.icon.beta{
    background-image: url(../assets/svg/beta.svg);
}
.icon.uat{
    background-image: url(../assets/svg/UAT.svg);
}
.icon.app{
    background-image: url(../assets/svg/app.svg);
    padding-left: 15px;
}
.icon.website{
    background-image: url(../assets/svg/website.svg);
}

/*** Tables ***/
table{
   width: 100%;
   text-align: left;
   font-size: 11px;
   border-collapse: collapse;
   table-layout: fixed;
}

th{
    font-weight: 300;  
    padding: 10px 15px;
    border-top: 1px #FBFAFC solid;
}
td{
    height: 60px;
    border-top: 1px #FBFAFC solid;
    padding: 15px;
}
#invoices thead,
#staff_happiness thead,
#invoices tbody,
#staff_happiness tbody{
    display: block;
}
#invoices tbody,
#staff_happiness tbody{
    overflow: scroll;
}
/*** Invoices ***/

#invoices tbody{
    height: 300px;
}
#invoices th,
#invoices td{
    width: 150px;
}
#invoices  td{
    vertical-align: bottom;
}
.client{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

/*** Staff Happiness ***/
#staff_happiness th:not(:first-of-type),
#staff_happiness td:not(:first-of-type){
    text-align: center;
}
#staff_happiness td:nth-of-type(2) i{
    opacity: 0.5;
}
#staff_happiness tbody{
    height: 175px;
}
#staff_happiness th,
#staff_happiness td{
    width: 148px;
}
#staff_happiness td{
    height: 0;
    padding: 10px 15px;
}

#staff_happiness i{
    font-size: 14px;
}

/*** COLOURS ***/
.background_grey{
    background: #EDEDED;
}
.background_pink{
    background: #EA005C;
}
.background_blue{
    background: #18407E;
}



.color_pink{
    color: #EA005C;
}
.color_blue{
    color: #18407E;
}

.background_red{
    background: #BF211E;
}
.background_amber{
    background: #EDAE49;
}
.background_green{
    background: #5FAD56;
}


.color_red{
    color: #BF211E;
}
.color_amber{
    color: #EDAE49;
}
.color_green{
    color: #5FAD56;
}

.status_signal.background_red{
    box-shadow: 0px 0px 5px 0px #BF211E;
} 
.status_signal.background_amber{
    box-shadow: 0px 0px 5px 0px #EDAE49;
} 
.status_signal.background_green{
    box-shadow: 0px 0px 5px 0px #5FAD56;
} 

#grid{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#left_side,#right_side{
  display: inline-block;
  vertical-align: top;
}

#right_side{
    width: calc(30% - 10px);
    margin-left: 10px;
}

.panel{
    margin: 10px; 
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(49, 48, 50, 0.05);
}
.scroll{
    overflow: scroll;
}
#left_side{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -10px;
    max-height: calc(100vh - 20px);
    width: calc(70% - 10px);
    margin-right: 10px;
}
#left_side .panel{
    flex: 0 0 20%;
    max-width: calc(20% - 20px);
    height: 334px;
    min-width: 200px;
}
#right_side{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30%;
    height: calc(100vh - 40px);
}
#right_side .panel{
    margin:0 0 20px 0;
}
.panel.table section{
    padding: 0;
}


</style>
