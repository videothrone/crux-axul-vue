<template>
  <Loader v-if="isLoading" />
  <div class="content__release" v-if="!isLoading">
    <RouterLink :to="{ name: 'releases' }" class="content__release-back-button" v-once>
      ← All releases
    </RouterLink>
    <div class="content__release-info">
      <ReleaseCard
        :releaseLink="release.releaseLink"
        :releaseTitle="release.releaseTitle"
        :releaseArtist="release.releaseArtist"
        :releaseImg="release.releaseImg"
        :releaseNumber="release.releaseNumber"
        class="content__release--release-card"
      />
      <iframe title="Bandcamp Player" style="border: 0; width: 100%; height: 42px" :src="release.releaseBandcampEmbbed" seamless>
        {{ release.releaseTitle }} by {{ release.releaseArtist }}
      </iframe>
      <div class="visually-hidden">
        <a :href="release.releaseLink" rel="noreferrer noopener" target="_blank">
          {{ release.releaseTitle }} by {{ release.releaseArtist }}
        </a>
      </div>
      <div class="content__release-info-details">
        <p class="content__release-info-format">
          <b>Release format: </b>{{ release.releaseFormat }}
        </p>
        <p class="content__release-info-date">
          <b>Release date: </b>{{ release.releaseDate }}
        </p>
        <p class="content__release-info-link">
          <a :href="release.releaseLink" class="link link--inverted">Buy / Listen</a>
        </p>
      </div>
    </div>
    <div class="content__release-promotext">
      <div class="content__release-promotext-blurb">
        <ExpandableText :text="release.releaseBlurb" :maxLength="200" />
      </div>
      <hr class="hrr hrr--content-release hrr--no-gap" />
      <div class="content__release-promotext-tracklist">
        <div v-for="tracklist in release.releaseTracklist">
          {{ tracklist.number }}. {{ tracklist.title }} {{ tracklist.runtime }}
        </div>
      </div>
      <hr class="hrr hrr--content-release hrr--no-gap" />
      <div class="content__release-promotext-credits">
        <ul>
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
import ReleaseCard from '@/components/release-card/ReleaseCard.vue';
import ExpandableText from '@/components/expandable-text/ExpandableText.vue';
import { fetchData } from '@/helpers/helperFunctions.js';
import { ref, onMounted } from 'vue';

const props = defineProps({
  releaseDetails: String
});
const release = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(() => {
  fetchData('/releases.json')
    .then(data => {
      const { releases } = data;
      const releaseId = props.releaseDetails;
      const fetchedRelease = releases.find(release => release.id === releaseId);

      if (fetchedRelease) {
        release.value = fetchedRelease;
      } else {
        error.value = "Release not found";
      }
    })
    .catch(err => {
      console.error(err.message);
      error.value = "Failed to load release data";
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>

<style lang="scss">
@import './ReleaseDetails.scss';
</style>
