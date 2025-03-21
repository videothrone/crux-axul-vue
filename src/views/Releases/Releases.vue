<template>
  <Loader v-if="isLoading" />

  <div class="releases-wrapper" v-if="!isLoading">
    <button
      type="button"
      class="releases-sort-button"
      @click="toggleSortOrder"
    >
      {{ sortOrder === 'asc' ? 'Newest ↑' : 'Oldest ↓' }}
    </button>

    <ul class="releases">
      <li
        class="releases__card"
        v-for="release in sortedReleases"
        :key="release.id"
      >
        <ReleaseCard
          :isRouterLink="true"
          :releaseId="release.id"
          :releaseTitle="release.releaseTitle"
          :releaseArtist="release.releaseArtist"
          :releaseImg="release.releaseImg"
          :releaseNumber="release.releaseNumber"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Loader from '@/components/loader/Loader.vue';
import ReleaseCard from '@/components/release-card/ReleaseCard.vue';
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
@use './Releases.scss';
</style>
