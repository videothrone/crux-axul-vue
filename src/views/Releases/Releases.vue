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
        <ReleaseLink
          :isRouterLink="true"
          :releaseId="release.id"
          :releaseTitle="release.releaseTitle"
          :releaseArtist="release.releaseArtist"
          :releaseImg="release.releaseImg"
          :releaseNumber="release.releaseNumber"
          class="content__releases-card-link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Loader from '@/components/loader/Loader.vue';
import ReleaseLink from '@/components/release-link/ReleaseLink.vue';
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
