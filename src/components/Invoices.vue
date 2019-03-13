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
                                Due Date
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
                            <tr v-for="client in this.$store.getters.clientInvoices" :key="client.id">
                                <td>
                                    <div class="client"><span class="bold">{{ client.client }}</span> <span class="status_signal background_green"></span></div>
                                    <div v-for="invoice in client.invoices" :key="invoice.id" class="date">{{ invoice.due }}</div>
                                </td>
                                <td>
                                    <div v-for="invoice in client.invoices" :key="invoice.id">{{ invoice.amount }}</div>
                                </td>
                                <td>
                                    <div v-for="invoice in client.invoices" :key="invoice.id">{{ invoice.sent }}</div>
                                </td>
                                <td>
                                    <div v-for="invoice in client.invoices" :key="invoice.id"><i class="fas" :class="determinePaidClass(invoice.paid)"></i></div>
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
