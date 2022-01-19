<template>
  <router-link :to="{ name: 'Country', params: { code: country.alpha2Code } }" >
      <div class="shadow bg-white dark:bg-dark-blue rounded-md overflow-hidden">
        <img :src="country.flags.svg" :alt="country.name" class="aspect-video" />

        <div class="px-4 py-6">
          <h3 class="font-bold mb-2">{{ country.name }}</h3>
          <ul class="text-sm space-y-1">
            <li><span class="font-semibold">Population: </span>{{ country.population }}</li>
            <li><span class="font-semibold">Region: </span>{{ country.region }}</li>
            <li><span class="font-semibold">Capital: </span>{{ country.capital }}</li>
          </ul>
        </div>
      </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


  export default defineComponent({
    props: ["country"]
  })
</script>
