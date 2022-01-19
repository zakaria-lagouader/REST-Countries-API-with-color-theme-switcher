<template>
  <router-link to="/" class="mb-20 block w-fit">
    <div
      class="shadow py-3 px-6 bg-white dark:bg-dark-blue rounded-md flex items-center cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      <p class="text-sm font-semibold select-none">Back</p>
      <!-- Arrow Icon -->
    </div>
  </router-link>

  <div v-if="isError" class="h-[50vh] grid items-center">
    <p class="text-3xl font-bold text-very-dark-blue">Error</p>
  </div>

  <div v-if="isLoading" class="h-[50vh] grid items-center">
    <p class="text-3xl font-bold text-very-dark-blue text-center">
      Loading ...
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center" v-else>
      <div>
          <img :src="country.flag" :alt="country.name">
      </div>
      <div>
        <p class="font-bold text-4xl mb-4">{{ country.name }}</p>
        <div class="grid grid-cols-2 gap-20">
            <div class="space-y-2">
                <p><span class="font-semibold">Native Name: </span>{{ country.name.nativeName }}</p>
                <p><span class="font-semibold">Population: </span>{{ country.population }}</p>
                <p><span class="font-semibold">Region: </span>{{ country.region }}</p>
                <p><span class="font-semibold">Sub Region: </span>{{ country.subregion }}</p>
                <p><span class="font-semibold">Capital: </span>{{ country.capital }}</p>
            </div>
            <div class="space-y-2">
                <p><span class="font-semibold">Top Level Domain: </span>{{ country.topLevelDomain.join(", ") }}</p>
                <p><span class="font-semibold">Currencies: </span>{{ country.currencies[0].code }}</p>
                <p><span class="font-semibold">Languages: </span>{{ country.languages[0].name }}</p>
            </div>
        </div>

        <!-- spacing -->
        <div class="py-8"></div>

        <div class="flex items-center space-x-2 flex-wrap">
            <p class="font-semibold my-2">Border countries: </p>
            <router-link :to="{ name: 'Country', params: { code: border } }" class="px-5  border-dark-gray border-2 rounded-sm my-2" v-for="(border, i) in country.borders" :key="i">
              {{ border }}
            </router-link>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/runtime-core";
import { useQuery } from "vue-query";
import { useRoute } from "vue-router";
import { getCountriesByCode } from "../api";

export default defineComponent({
  setup() {
    const route = useRoute()
    const country = ref();

    const { isLoading, isError, refetch } = useQuery(
      ["countriesByCode", route.params.code],
      () => getCountriesByCode(route.params.code as string),
      {
        onSuccess(data) {
          country.value = data;
        }
      }
    );

    watch(() => route.params.code, () => refetch.value())
    


    return { isLoading, isError, country }
  }
})
</script>
