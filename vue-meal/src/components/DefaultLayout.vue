<template>


      <navbar></navbar>
        <main>
            <div class="max-w-[1200px] mx-auto">
                <router-view></router-view>
            </div>

        </main>

</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped>

</style>