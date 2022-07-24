<template>
    <main>
        <header>    
            <h1>{{titlePage}}</h1>
            <div class="additiona-options">
            </div>
        </header>
        <BaseTable 
            :headerTable="TimerTableHeader" 
        />
    </main>
</template>
<script setup lang="ts">
    const titlePage: string = 'TIMERS';
    const nameButtonTxt: string = 'ADD NEW TIMERS';
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