<template>
  <div class="relative w-full md:w-96" @click="isOpen = !isOpen">
    <div
      class="shadow p-3 bg-white dark:bg-dark-blue rounded-md flex items-center justify-between cursor-pointer"
    >
      <p class="text-sm font-semibold select-none">Filter by Rigion</p>
      <!-- Arrow Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    <!-- Options -->
    <ul
      v-if="isOpen"
      class="shadow w-full bg-white dark:bg-dark-blue rounded-md overflow-hidden absolute top-[110%] left-0 z-20"
    >
      <li
        class="px-3 py-2 cursor-pointer hover:bg-very-light-gray transition-all flex items-center"
        v-for="regionCode in Object.keys(regions)"
        :key="regionCode"
        @click="setCurrentRegion(regionCode)"
      >
        <svg
          v-if="currentRegion === regionCode"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        {{ regions[regionCode] }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    const regions: {[k: string]: string} = {
      EU:  "European Union",
      EFTA:  "European Free Trade Association",
      CARICOM:  "Caribbean Community",
      PA:  "Pacific Alliance",
      AU:  "African Union",
      USAN:  "Union of South American Nations",
      EEU:  "Eurasian Economic Union",
      AL:  "Arab League",
      ASEAN:  "Association of Southeast Asian Nations",
      CAIS:  "Central American Integration System",
      CEFTA:  "Central European Free Trade Agreement",
      NAFTA:  "North American Free Trade Agreement",
      SAARC:  "South Asian Association for Regional Cooperation",
    };

    return {
      isOpen,
      regions,
      currentRegion: computed(() => store.state.currentRegion),
      setCurrentRegion: (region: string) =>
        store.dispatch("setCurrentRegion", region),
    };
  },
});
</script>
