<template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
    <div v-if="!meals.length " class="flex justify-center"  >
        Нету данных
    </div>
</template>

<script setup>

import MealItem from "@/components/MealItem.vue";

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array,
    }
})
</script>

<style scoped>

</style>