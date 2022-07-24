<style lang="scss" scoped>

</style>
<template>
    <main>
        <header>    
            <h1>{{titlePage}}</h1>
            <AdditionalOptions 
                :nameButton="nameButtonTxt"
                :placeholder="placeholderSearch"
            />
        </header>
        <BaseTable 
            :headerTable="TimerTableHeader"
        />
    </main>
</template>
<script setup lang="ts">
    const titlePage: string = 'TIMERS';
    const nameButtonTxt: string = 'ADD NEW TIMERS';
    const placeholderSearch: string = 'Search...';
    const TimerTableHeader: Array<string> = [
         'Enabled', 
         'Name', 
         'Message', 
         'Interval Online', 
         'Chat Lines', 
         'Delete', 
         'Edit'
    ]; 
</script>