<template>
    <header class="bg-white shadow h-16 flex justify-between items-center items-stretch ">
        <router-link :to="{name:'home'}" class="inline-flex items-center px-5 h-full">Home</router-link>
        <div class="flex items-stretch gap-1">
            <router-link :to="{name:'byName'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100 ">Search Meals</router-link>
            <router-link :to="{name:'byLetter'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100 ">Meals By Letter</router-link>
            <router-link :to="{name:'ingredients'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100 ">Meals By Ingredients</router-link>
        </div>
    </header>
</template>

<script>

</script>

<style scoped>

</style>