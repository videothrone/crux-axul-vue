<template>
  <Loader v-if="isLoading"/>
  <div class="content__home" v-if="!isLoading">
    <div id="content__home-left">
      <div id="content__home-left-cover">
        <a
          :href="release.releaseLink"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            :src="`/assets/img/${release.releaseImg}`"
            :alt="`Cover of ${release.releaseTitle} by ${release.releaseArtist}`"
            class="content__home-img"
          />
        </a>
      </div>
      <div>
        <iframe
          style="border: 0; width: 100%; height: 42px;"
          :src="release.releaseBandcampEmbbed"
          seamless="">
          <a :href="release.releaseLink">
            {{ release.releaseTitle }} by {{ release.releaseArtist }}
          </a>
        </iframe>
      </div>
      <div id="content__home-left-credits">
        <div class="content__home-release-format">
          <b>Release format: </b><span v-html="release.releaseFormat"></span>
        </div>
        <div class="content__home-release-date">
          <b>Release date: </b>{{ release.releaseDate }}
        </div>
      </div>
    </div>
    <div class="content__home-right">
      <a
        :href="release.releaseLink"
        rel="noreferrer noopener"
        target="_blank"
        class="content__home-right-section content__home-out-now"
      >
        <span class="content__home-out-now-text">
          OUT NOW <v-icon name="hi-arrow-narrow-right" class="content__home-out-now-icon" scale="1.2"/>
        </span>
        <span class="content__home-out-now-text">
          {{ release.releaseArtist }} - {{ release.releaseTitle }}
        </span>
      </a>
      <div class="content__home-right-section">
        <p v-html="release.releaseBlurb"></p>
      </div>
      <hr class="hrr" />
      <div class="content__home-right-section">
        <div v-for="tracklist in release.releaseTracklist">
          {{ tracklist.number }}. {{ tracklist.title }} {{ tracklist.runtime }}
        </div>
      </div>
      <hr class="hrr" />
      <div class="content__home-right-section">
        <ul class="content__home-right-section-credits">
          <li v-if="release.releaseProducer">Produced by {{ release.releaseProducer }}</li>
          <li>Mastered by <span v-html="release.releaseMastering"></span></li>
          <li>{{ release.releaseArtwork }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/loader/Loader.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Loader
  },
  setup() {
    const release = ref([]);
    const isLoading = ref(true);

    onMounted(() => {
      fetch('/releases.json')
        .then(res => res.json())
        .then(data => {
          const { releases } = data;
          const newestRelease = releases[releases.length - 1];

          if (newestRelease) {
            release.value = newestRelease;
            isLoading.value = false;
          } else {
            console.log(err.message, "No JSON found!");
          }
        })
        .catch(err => console.log(err.message));
    });

    return {
      release
    };
  }
}
</script>

<style lang="scss">
@import './Home.scss';
</style>
