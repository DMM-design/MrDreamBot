<style lang="scss">
    .container{
        display: flex;
        width: 100%;
        .pages{
            width: 100%;
        }
    }
    
</style>
<template>
    <div class="container">
        <TheSideMenu/>
        <slot class="pages"/>
    </div>
</template>
