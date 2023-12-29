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
          ><a :href="release.releaseLink">{{ release.releaseTitle }}</a></iframe>
      </div>
      <div class="content__release-promotext">
        <div class="content__release-promotext-blurb">
          <p v-html="release.releaseBlurb"></p>
        </div>
        <hr class="hrr hrr--content__release" />
        <div class="content__release-promotext-credits">
          <ul>
            <li>Produced by {{ release.releaseProducer }}</li>
            <li>Mastered by {{ release.releaseMastering }}</li>
            <li>{{ release.releaseArtwork }}</li>
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
/*   data() {
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
  }, */
  props: ['releaseDetails'],
  data() {
    return {
      release: [],
    }
  },
  mounted() {
    /* console.log(this.$route.params); */
    fetch('/releases.json')
      .then(res => res.json())
      .then(data => {
        const JSONdata = data;
        const releaseId = this.$props.releaseDetails;
        const fetchedRelease = JSONdata.releases.find(release => release.id === releaseId);

        if (fetchedRelease) {
          this.release = fetchedRelease;
          console.log("Fetched Release:", fetchedRelease);
        } else {
          console.log("No release found with ID:", id);
        }
      })
      .catch(err => console.log(err.message));
  }
}
</script>




