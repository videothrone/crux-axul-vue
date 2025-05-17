<template>
  <Loader v-if="isLoading"/>
  <ul class="content__links" v-if="!isLoading" aria-label="External links">
    <li v-for="link in links" :key="link.id" class="content__link" role="listitem">
      <a :href="link.url" class="link link--inverted" rel="noreferrer noopener" target="_blank">{{ link.label }}</a>
    </li>
  </ul>
</template>

<script setup>
import Loader from '@/components/loader/Loader.vue';
import { fetchData } from '@/helpers/helperFunctions.js';
import { ref, onMounted } from 'vue';

const links = ref([]);
const isLoading = ref(true);

onMounted(() => {
  fetchData('/links.json')
    .then(data => {
      links.value = data;
      isLoading.value = false;
    })
    .catch(err => console.log(err.message));
});
</script>

<style lang="scss" scoped>
@use './Links.scss';
</style>
