<template>
  <Loader v-if="isLoading"/>
  <ul class="content__links" v-if="!isLoading">
    <li v-for="link in links" :key="link.id" class="content__link" role="listitem">
      <a :href="link.url" class="link link--inverted" rel="noreferrer noopener" target="_blank">{{ link.label }}</a>
    </li>
  </ul>
</template>

<script>
import Loader from '@/components/loader/Loader.vue';
import { fetchData } from '@/helpers/helperFunctions.js';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Loader
  },
  setup() {
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

    return {
      links,
      isLoading
    };
  }
};
</script>

<style lang="scss">
@import './Links.scss';
</style>
