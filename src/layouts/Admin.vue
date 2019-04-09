<template>
    <div>
        <AdminNavigation />
        <main>
            <slot /> <!-- The various admin screens will go here -->
        </main>
    </div>
</template>

<script>
import AdminNavigation from '@/components/AdminNavigation.vue'

export default {
    components: {
        AdminNavigation
    }
}
</script>

<style scoped>

*{
    box-sizing: border-box;
    position: relative;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    color:#313032;
    font-size: 12px;
}
main{
    margin-left: 240px;
    padding: 20px;
}

</style>
