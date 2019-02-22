<template>
    <div class="panel table" id="invoices">
            <header>
                <div class="heading">
                    <h3 class="bold">Invoices</h3>
                </div>
            </header>
            
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
                            <tr v-for="invoice in this.$store.getters.invoices" :key="invoice.id">
                                <td>
                                    <div class="client"><span class="bold">{{ invoice.client }}</span></div>
                                    <div class="date">{{ invoice.due }}</div>
                                </td>
                                <td>
                                    <div>{{ invoice.amount }}</div>    
                                </td>
                                <td>
                                    <div>{{ invoice.sent }}</div>    
                                </td>
                                <td>
                                    <div><i class="fas" :class="determinePaidClass(invoice.paid)"></i></div>    
                                </td>
                            </tr>                                                   
                        </tbody>
                </table>

        </div>
</template>

<script>
export default {

methods:  {
    determinePaidClass (isPaid) {
        return (isPaid) ? "fa-check color_green" : "fa-times color_red"
    }
}
}
</script>

<style scoped>

</style>
