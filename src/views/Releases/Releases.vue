<template>
  <Loader v-if="isLoading" />

  <div class="releases-wrapper" v-if="!isLoading">

    <div class="releases-controls">
      <button
        type="button"
        class="releases-controls__sort-button"
        @click="toggleSortOrder"
      >
        {{ sortOrder === 'asc' ? 'Newest ↑' : 'Oldest ↓' }}
      </button>
      <div class="releases-controls__filter-wrapper">
        <select class="releases-controls__filter" v-model="selectedArtist">
          <option value="all">All</option>
          <option v-for="artist in uniqueArtists" :key="artist" :value="artist">
            {{ artist }}
          </option>
        </select>
        <v-icon name="hi-chevron-down" aria-hidden="true" />
      </div>
    </div>

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
const uniqueArtists = ref([]);
const selectedArtist = ref('all');

const sortedReleases = computed(() => {
  if (selectedArtist.value === 'all') {
    return sortOrder.value === 'asc'
      ? content.value.releases
      : [...content.value.releases].reverse();
  } else {
    return sortOrder.value === 'asc'
      ? content.value.releases.filter(release => release.releaseArtist === selectedArtist.value)
      : [...content.value.releases.filter(release => release.releaseArtist === selectedArtist.value)].reverse();
  }
});

onMounted(async () => {
  try {
    const data = await fetchData('/releases.json');
    content.value = data;
    const artists = data.releases.map(release => release.releaseArtist);
    uniqueArtists.value = [...new Set(artists)];
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
