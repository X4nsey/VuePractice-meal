<template>
    <div class="p-8 pb-8">
        <div class="text-xl font-bold mb-4 text-slate-600">Meals for {{ingredient.strIngredient}}</div>
    </div>
    <Meals :meals="meals"></Meals>
</template>

<script setup>
import {onMounted, ref,computed} from "vue";


import store from "@/store/store.js";
import {useRoute} from "vue-router";
import Meals from "@/components/Meals.vue";


const meals =  computed(() => store.state.mealsByIngredient);
const route = useRoute();
const ingredient=computed(()=>store.state.ingredient)


onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<style scoped>

</style>