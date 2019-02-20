<template>
    <div class="panel table" id="invoices">
            <header>
                <div class="heading">
                    <h3 class="bold">Invoices</h3>
                </div>
            </header>
            <section class="scroll">
                <table>
                    <thead>
                        <tr>
                            <th>
                                date
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Sent
                            </th>
                            <th>
                                Paid
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_green"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>10,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-check color_green"></i></div>    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_amber"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>10,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-times color_red"></i></div>    
                                </td>
                            </tr>   
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_amber"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>125,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-times color_red"></i></div>    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_amber"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>100,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-times color_red"></i></div>    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_red"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>500,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-times color_red"></i></div>    
                                </td>
                            </tr> 
                            <tr>
                                <td>
                                    <div class="client"><span class="bold">Client Name</span> <span class="status_signal background_red"></span></div>
                                    <div class="date">18th May 2019</div>
                                </td>
                                <td>
                                    <div>500,000</div>    
                                </td>
                                <td>
                                    <div>1 day ago</div>    
                                </td>
                                <td>
                                    <div><i class="fas fa-times color_red"></i></div>    
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



.scroll{
    overflow: scroll;
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

.panel.table section{
    padding: 0;
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

/*** Invoices ***/

td{
    vertical-align: bottom;
}
.client{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}
#invoices .scroll{
    max-height: 336px;
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

</style>
