<template>
    <BaseTable :headerTable="TimerTableHeader" />
</template>
<script setup lang="ts">
    const TimerTableHeader: Array<Object> = [
        {tableHeaderTXT: 'Enabled'}, 
        {tableHeaderTXT: 'Name'}, 
        {tableHeaderTXT: 'Message'}, 
        {tableHeaderTXT: 'Interval Online'}, 
        {tableHeaderTXT: 'Chat Lines'}, 
        {tableHeaderTXT: 'Delete'}, 
        {tableHeaderTXT: 'Edit'}
    ]; 
</script>