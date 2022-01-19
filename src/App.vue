<template>
  <div class="font-nunito-sans dark:bg-very-dark-blue bg-very-light-gray min-h-screen text-very-dark-blue dark:text-white">
    <Navbar />
    <!-- Main Section -->
    <div class="py-10 container px-4 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import { defineComponent } from '@vue/runtime-core';
import { useQueryProvider } from "vue-query";

export default defineComponent({
  name: "App",
  components: {Navbar},
  setup(){
    useQueryProvider();
  }
})

</script>

<style>

</style>