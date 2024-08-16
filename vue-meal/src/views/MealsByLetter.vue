<template>
    <div class="flex gap-4 justify-center mt-4 flex-wrap   ">
        <router-link
                :to="{name:'byLetter', params:{letter}}"
                v-for="letter in letters" class="text-2xl hover:text-blue-500 hover:scale-125 transition-all"
                :key="letter">
                {{ letter }}
        </router-link>
    </div>

    <Meals :meals="meals"></Meals>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import store from "../store/store.js";
import {useRoute} from "vue-router";
import MealItem from "@/components/MealItem.vue";
import Meals from "@/components/Meals.vue";

const route = useRoute();
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals =  computed(() => store.state.mealsByLetter);

watch(route,()=>{
    store.dispatch('searchMealsByLetter', route.params.letter)

})

onMounted(()=>  {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<style scoped>

</style>