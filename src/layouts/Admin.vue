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

<style>

</style>
