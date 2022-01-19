<template>
  <!-- Filtering Section -->
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
    <!-- Input -->
    <Input />

    <!-- DropDown -->
    <Dropdown />
  </div>
  <div v-if="isError" class="h-[50vh] grid items-center">
    <p class="text-3xl font-bold text-very-dark-blue">Error</p>
  </div>
  <div v-if="isLoading" class="h-[50vh] grid items-center">
    <p class="text-3xl font-bold text-very-dark-blue text-center">
      Loading ...
    </p>
  </div>
  <!-- Cards -->
  <div
    class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
    v-else
  >
    <!-- Card -->
    <Card v-for="(country, i) in countries" :key="i" :country="country" />
  </div>
</template>

<script lang="ts">
import Input from "../components/Input.vue";
import Dropdown from "../components/Dropdown.vue";
import Card from "../components/Card.vue";
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useQuery } from "vue-query";
import { getCountriesByRegion } from "../api";

export default defineComponent({
  components: { Input, Dropdown, Card },
  setup() {
    const store = useStore();
    const currentRegion = computed(() => store.state.currentRegion);
    const countries = computed(() => store.getters.filteredCountries);
    const setCountries = (payload: any[]) =>
      store.dispatch("setCountries", payload);

    const { isLoading, isError, refetch } = useQuery(
      ["countriesByRegion", currentRegion.value],
      () => getCountriesByRegion(currentRegion.value),
      {
        onSuccess(data) {
          setCountries(data);
        },
      }
    );

    store.watch((state) => state.currentRegion, () => {
      const fun = refetch.value;
      fun();
    })

    return { isLoading, isError, countries };
  },
});
</script>
