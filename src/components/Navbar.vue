<template>
    <div class="w-full bg-white dark:bg-dark-blue h-16 shadow flex items-center">
        <div class="container px-4 mx-auto flex items-center justify-between">
            <h1 class="font-bold text-lg">Where in the world ?</h1>
            <button class="font-semibold text-sm p-4 flex items-center" @click="toggleDarkMode">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Dark Mode
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";


export default defineComponent({
    setup() {
        const store = useStore();

        store.watch((state) => state.modeIsDark, () => {
            if (store.state.modeIsDark) {
                document.documentElement.classList.add("dark")
            }else {
                document.documentElement.classList.remove("dark")
            }
        })

        return {
            toggleDarkMode: () => store.commit("toggleDarkMode")
        }
    }
})
</script>
