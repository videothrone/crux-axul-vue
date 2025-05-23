<template>
  <Loader v-if="isLoading" />
  <div class="content__home" v-if="!isLoading">
    <div id="content__home-left">
      <div id="content__home-left-cover">
        <a :href="release.releaseLink" rel="noreferrer noopener" target="_blank">
          <img :src="`/assets/img/${release.releaseImg}`"
            :alt="`Cover of ${release.releaseTitle} by ${release.releaseArtist}`" class="content__home-img" width="500"
            height="500" />
        </a>
      </div>
      <div>
        <div>
          <iframe title="Bandcamp Player" style="border: 0; width: 100%; height: 42px;" :src="release.releaseBandcampEmbbed" seamless>
            {{ release.releaseTitle }} by {{ release.releaseArtist }}
          </iframe>
          <div class="visually-hidden">
            <a :href="release.releaseLink" rel="noreferrer noopener" target="_blank">
              {{ release.releaseTitle }} by {{ release.releaseArtist }}
            </a>
          </div>
        </div>
      </div>
      <div id="content__home-left-details">
        <div class="content__home-release-format">
          <b>Release format: </b>{{ release.releaseFormat }}
        </div>
        <div class="content__home-release-date">
          <b>Release date: </b>{{ release.releaseDate }}
        </div>
        <div class="content__home-release-link">
          <a :href="release.releaseLink" rel="noreferrer noopener" target="_blank">Buy / Listen</a>
        </div>
      </div>
    </div>
    <div class="content__home-right">
      <a :href="release.releaseLink" rel="noreferrer noopener" target="_blank"
        class="content__home-right-section content__home-out-now"
        :aria-label="`${release.releaseArtist} - ${release.releaseTitle}, Out Now. Listen on Bandcamp.`">
        <p class="release-card__header">
          <span class="release-card__out-now">Out Now</span>
          <v-icon name="hi-arrow-narrow-right" class="release-card__icon" scale="1.2" aria-hidden="true" />
         </p>
        <p class="release-card__body">
          <span class="release-card__artist">{{ release.releaseArtist }} -</span>
          <span class="release-card__title">&nbsp;{{ release.releaseTitle }}</span>
        </p>
      </a>
      <div class="content__home-right-section">
        <ExpandableText :text="release.releaseBlurb" :maxLength="200" />
      </div>
      <hr class="hrr" />
      <div class="content__home-right-section">
        <ul class="content__home-right-section-list">
          <li class="content__home-right-section-list-item" v-for="tracklist in release.releaseTracklist"
            :key="tracklist.number">
            {{ tracklist.number }}. {{ tracklist.title }} {{ tracklist.runtime }}
          </li>
        </ul>
      </div>
      <hr class="hrr" />
      <div class="content__home-right-section">
        <ul class="content__home-right-section-credits">
          <li v-if="release.releaseProducer">Produced by {{ release.releaseProducer }}</li>
          <li>Mastered by <span v-html="release.releaseMastering"></span></li>
          <li v-html="release.releaseArtwork"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from '@/components/loader/Loader.vue';
import ExpandableText from '@/components/expandable-text/ExpandableText.vue';
import { fetchData } from '@/helpers/helperFunctions.js';
import { ref, onMounted } from 'vue';

const release = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const data = await fetchData('/releases.json');
    const { releases } = data;
    if (releases && releases.length > 0) {
      release.value = releases[releases.length - 1];
    } else {
      error.value = "No releases found";
    }
  } catch (err) {
    console.error(err.message);
    error.value = "Failed to load release data";
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss">
@use './Home.scss';
</style>
