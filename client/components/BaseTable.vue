<style lang="scss" scoped>
</style>

<template>
    <table>
        <thead>
            <th v-for="header in headerTable" :key="header">{{header}}</th>
        </thead>
        <tbody>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    defineProps<{
        headerTable?: Array<string>,
    }>()
</script>