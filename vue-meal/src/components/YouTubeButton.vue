<template>
    <a :href="href"
       class="px-3 py-2 rounded border-2 bg-red-500 text-white border-red-600  hover:bg-red-600  transition"
       target="_blank">
        <slot></slot>
    </a>

</template>

<script setup>
const props=defineProps({
    href:String
})
</script>

<style scoped>

</style>