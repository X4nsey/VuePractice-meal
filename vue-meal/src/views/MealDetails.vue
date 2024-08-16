<template>
    <div class="flex items-center justify-center flex-col">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-center text-lg py-2 w-fit">
            <div>
                <strong>Category: </strong>
                {{ meal.strCategory }}
            </div>
            <div >
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div >
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{meal.strInstructions}}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el,index) in new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index+1}`]">
                            {{ index + 1 }}.{{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>

                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(el,index) in new Array(20)" :key="index">
                        <li v-if="meal[`strMeasure${index+1}`]">
                            {{ index + 1 }}.{{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>

                </ul>
            </div>
            <div class="mt-4">
                <YouTubeButton :href="meal.strYoutube">Go na YouTube</YouTubeButton>
                <a :href="meal.strSource"
                   class=" ml-3 px-3 py-2 rounded border-2 bg-blue-500 text-white border-blue-600  hover:bg-blue-600  transition"
                   target="_blank">
                    View Origial Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axiosClient from "../AxiosClient.js";
import YouTubeButton from "@/components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {

    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0] || {}
        })
})
</script>

<style scoped>

</style>