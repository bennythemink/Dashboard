<template>
    <div>
        
        <div class="panel table"  id="staff_happiness">
            <header>
                <div class="heading">
                    <h3 class="bold">Staff Happiness</h3>
                </div>
            </header>
            <section class="scroll">
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
                        <tr>
                            <td>
                                <div class="bold">
                                    Overall Happiness
                                </div>
                            </td>
                            <td>
                                <i class="far fa-smile color_green"></i>
                            </td>
                            <td>
                                <i class="far fa-smile color_green"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    Category 1
                                </div>
                            </td>
                            <td>
                                <i class="far fa-smile color_green"></i>
                            </td>
                            <td>
                                <i class="far fa-angry color_red"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    Category 2
                                </div>
                            </td>
                            <td>
                                <i class="far fa-meh color_amber"></i>
                            </td>
                            <td>
                                <i class="far fa-meh color_amber"></i>
                            </td>
                        </tr>   
                        <tr>
                            <td>
                                <div>
                                    Category 3
                                </div>
                            </td>
                            <td>
                                <i class="far fa-smile color_green"></i>
                            </td>
                            <td>
                                <i class="far fa-meh color_amber"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    Category 4
                                </div>
                            </td>
                            <td>
                                <i class="far fa-angry color_red"></i>
                            </td>
                            <td>
                                <i class="far fa-smile color_green"></i>
                            </td>
                            </tr>                                       
                    </tbody>
                </table>
            </section> 
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

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

.bold{
    font-family: futura-pt-bold, sans-serif;
    font-weight: 700;
    font-style: normal;
}

/*** Staff Happiness ***/
#staff_happiness th:not(:first-of-type),
#staff_happiness td:not(:first-of-type){
    text-align: center;
}
#staff_happiness td:nth-of-type(2) i{
    opacity: 0.5;
}
#staff_happiness td{
    height: 0;
    padding: 10px 15px;
    
}

#staff_happiness i{
    font-size: 14px;
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

/** Colours **/
.color_red{
    color: #BF211E;
}
.color_amber{
    color: #EDAE49;
}
.color_green{
    color: #5FAD56;
}

/*** Tables ***/
table{
   width: 100%;
   text-align: left;
   font-size: 11px;
   border-collapse: collapse;
}

th{
    font-weight: 300;  
    padding: 10px 15px;
}
td{
    height: 60px;
    border-top: 1px #FBFAFC solid;
    padding: 15px;
}

</style>
