<template>
  <div class="content__release">
    <RouterLink :to="{ name: 'releases' }" class="content__release-back-button">← All releases</RouterLink>
      <div class="content__release-info">
        <a
          :href="release.releaseLink"
          rel="noreferrer noopener"
          target="_blank"
          class="content__release-info-link"
          ><img
            :src="`/assets/img/${release.releaseImg}`"
            :alt="`Cover of ${release.releaseTitle} by ${release.releaseArtist}`"
            class="content__release-image"
          />
          <div class="content__release-info-text">{{ release.releaseTitle }}</div>
          <div class="content__release-info-catnr">
            → {{ release.releaseNumber }}
          </div></a
        >
        <iframe
          style="border: 0; width: 100%; height: 42px"
          :src="release.releaseBandcampEmbbed"
          seamless
          ><a :href="release.releaseLink">{{ release.releaseTitle }} by {{ release.releaseArtist }}</a></iframe>
        <div class="content__release-info-format-date">
          <p class="content__release-info-format"><b>Release format: </b><span v-html="release.releaseFormat"></span></p>
          <p class="content__release-info-date"><b>Release date: </b>{{ release.releaseDate }}</p>
        </div>
      </div>
      <div class="content__release-promotext">
        <div class="content__release-promotext-blurb">
          <p v-html="release.releaseBlurb"></p>
        </div>
        <hr class="hrr hrr--content__release" />
        <div class="content__release-promotext-tracklist">
          <div v-for="tracklist in release.releaseTracklist">
            {{ tracklist.number }}. {{ tracklist.title }} {{ tracklist.runtime }}
          </div>
        </div>
        <hr class="hrr hrr--content__release" />
        <div class="content__release-promotext-credits">
          <ul>
            <li v-if="release.releaseProducer">Produced by {{ release.releaseProducer }}</li>
            <li>Mastered by <span v-html="release.releaseMastering"></span></li>
            <li>{{ release.releaseArtwork }}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['releaseDetails'],
  data() {
    return {
      release: []
    }
  },
  mounted() {
    fetch('/releases.json')
      .then(res => res.json())
      .then(data => {
        const JSONdata = data;
        const releaseId = this.$props.releaseDetails;
        const fetchedRelease = JSONdata.releases.find(release => release.id === releaseId);

        if (fetchedRelease) {
          this.release = fetchedRelease;
          /* console.log("Fetched Release:", fetchedRelease); */
        } else {
          console.log("No release found with ID:", releaseId);
        }
      })
      .catch(err => console.log(err.message));
  }
}
</script>




