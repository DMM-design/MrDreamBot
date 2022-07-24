<template>
    <div>
        <label for="searching">
            <input type="text" :placeholder="placeholder">
            <Icon icon="akar-icons:search" />
        </label>
        <button>{{nameButton}}</button>
    </div>
</template>
<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    defineProps<{
        nameButton?: string,
        placeholder?: string,
    }>()
</script>