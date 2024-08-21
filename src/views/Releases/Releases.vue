<template>
  <Loader v-if="isLoading" />

  <div class="content__releases-wrapper" v-if="!isLoading">
    <button
      type="button"
      class="content__releases-sort-button"
      @click="toggleSortOrder"
    >
      {{ sortOrder === 'asc' ? 'Newest ↑' : 'Oldest ↓' }}
    </button>

    <ul class="content__releases">
      <li
        class="content__releases-card"
        v-for="release in sortedReleases"
        :key="release.id"
      >
        <RouterLink :to="{ name: 'ReleaseDetails', params: { releaseDetails: release.id } }">
          <img
            :src="`/assets/img/${release.releaseImg}`"
            :alt="`Cover of ${release.releaseTitle}`"
            loading="lazy"
            class="release-cover-image"
          />
          <div>{{ release.releaseArtist }} - {{ release.releaseTitle }}</div>
          <div class="content__releases-card-cat">→ {{ release.releaseNumber }}</div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Loader from '@/components/loader/Loader.vue';
import { fetchData } from '@/helpers/helperFunctions.js';

const content = ref([]);
const isLoading = ref(true);
const sortOrder = ref('asc');

const sortedReleases = computed(() => {
  return sortOrder.value === 'asc'
    ? content.value.releases
    : [...content.value.releases].reverse();
});

onMounted(async () => {
  try {
    const data = await fetchData('/releases.json');
    content.value = data;
  } catch (err) {
    console.error(err.message);
    // Add future error handling for user
  } finally {
    isLoading.value = false;
  }
});

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};
</script>

<style lang="scss">
@import './Releases.scss';
</style>
