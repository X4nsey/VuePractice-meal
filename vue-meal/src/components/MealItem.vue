<template>
    <div  class="bg-white shadow-lg rounded-xl  hover:scale-105  transition-all">
        <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
        </router-link>
        <div class="p-3">
            <h3  class=" font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae debitis delectus </p>
            <div class="flex justify-between items-center">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <router-link to="/" class="px-3 py-2 rounded border-2 bg-blue-500 text-white border-blue-600  hover:bg-blue-600  transition">View</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

import YouTubeButton from "@/components/YouTubeButton.vue";

const {meal}=defineProps({

    meal:Object
})
</script>

<style scoped>

</style>