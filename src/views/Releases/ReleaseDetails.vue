<template>
  <div class="content__release">
    <RouterLink :to="{ name: 'releases' }" class="content__release-back-button">← All releases</RouterLink>
      <div class="content__release-info">
        <a
          :href="releaseLink"
          rel="noreferrer noopener"
          target="_blank"
          class="content__release-info-link"
          ><img
            :src="`/src/assets/img/${releaseImg}`"
            class="content__release-image"
          />
          <div class="content__release-info-text">{{ releaseTitle }}</div>
          <div class="content__release-info-catnr">
            → {{ releaseNumber }}
          </div></a
        >
        <iframe
          style="border: 0; width: 100%; height: 42px"
          :src="releaseBandcampEmbbed"
          seamless
          ><a :href="releaseLink">{{ releaseTitle }}</a></iframe>
      </div>
      <div class="content__release-promotext">
        <div class="content__release-promotext-blurb">
          <p v-html="releaseBlurb"></p>
        </div>
        <hr class="hrr hrr--content__release" />
        <div class="content__release-promotext-credits">
          <ul>
            <li>Produced by {{ releaseProducer }}</li>
            <li>Mastered by {{ releaseMastering }}</li>
            <li>{{ releaseArtwork }}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
 /*  props: ['releaseDetails', 'releaseLink', 'releaseImg', 'releaseArtist',
   'releaseTitle', 'releaseBandcampEmbbed', 'releaseNumber', 'releaseBlurb',
   'releaseProducer', 'releaseMastering', 'releaseArtwork'
  ], */
  data() {
      return {
        releaseDetails: this.$route.params.releaseDetails,
        releaseLink: this.$route.params.releaseLink,
        releaseImg: this.$route.params.releaseImg,
        releaseArtist: this.$route.params.releaseArtist,
        releaseTitle: this.$route.params.releaseTitle,
        releaseBandcampEmbbed: this.$route.params.releaseBandcampEmbbed,
        releaseNumber: this.$route.params.releaseNumber,
        releaseBlurb: this.$route.params.releaseBlurb,
        releaseProducer: this.$route.params.releaseProducer,
        releaseMastering: this.$route.params.releaseMastering,
        releaseArtwork: this.$route.params.releaseArtwork
      }
  },
  mounted() {
    console.log(this.$route.params);
  }
}
</script>



