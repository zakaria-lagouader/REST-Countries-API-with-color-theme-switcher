<template>
    <label class="flex items-center bg-white dark:bg-dark-blue shadow w-full md:w-1/3 rounded-md overflow-hidden">
        <div class="px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 stroke-dark-gray"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
        <input type="text" id="search" class="p-3 flex-1 bg-white dark:bg-dark-blue" placeholder="Search for a country" :value="searchValue" @input="updateSearchValue" />
    </label>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const searchValue = computed(() => store.state.searchValue);
        const updateSearchValue = (e: any) => store.commit("updateSearchValue", e.target.value)
        return {
            searchValue,
            updateSearchValue
        }
    },
})
</script>
