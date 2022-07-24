<template>
    <div>
        <input type="text">
        <button>{{nameButton}}</button>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
        nameButton?: string
    }>()
</script>