<template>
  <div class="content__release">
    <template v-for="block in content.body">
      <div class="content__release-info">
        <a
          :href="block.releaseLink"
          rel="noreferrer noopener"
          target="_blank"
          class="content__release-info-link"
          ><img
            :src="`/src/assets/img/${block.releaseImg}`"
            class="content__release-image"
          />
          <div class="content__release-info-text">{{ block.releaseTitle }}</div>
          <div class="content__release-info-catnr">
            → {{ block.releaseNumber }}
          </div></a
        >
        <iframe
          style="border: 0; width: 100%; height: 42px"
          :src="block.releaseBandcampEmb"
          seamless
          ><a :href="block.releaseLink">{{ block.releaseTitle }}</a></iframe
        >
      </div>
      <div class="content__release-promotext">
        <div class="content__release-promotext-blurb">
          <p>✺ {{ block.releaseBlurb }} ✺</p>
        </div>
        <hr class="hrr hrr--content__release" />
        <div class="content__release-promotext-credits">
          <ul>
            <li>{{ block.releaseProducer }}</li>
            <li>Mastered by {{ block.releaseMastering }}</li>
            <li>{{ block.releaseArtwork }}</li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        body: [
          {
            _uid: 'BUY6Drn9e1',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/fever-bells',
            releaseImg: 'CXA001_thumb.jpg',
            releaseTitle: 'Lymbs - Fever Bells',
            releaseBandcampEmb:
              'https://bandcamp.com/EmbeddedPlayer/album=3244739003/size=small/bgcol=333333/linkcol=e99708/transparent=true/',
            releaseNumber: 'CXA001',
            releaseBlurb: `2019 AD. The Arctic Circle and the Amazon are on fire, fascism is
            on the rise again, the gap between the richest and the poorest is
            still widening. New anxieties need to be addressed. Crux Axul has
            invited seven musicians to write and record a piece of music
            motivated by the way they perceive the world changing around them at
            a seemingly ever-increasing pace. From Silicone's flickering
            exercise in melodic modular experimentation, to YS' contemporary
            take on Musique Concrète, to Shannon Soundquist's longform drone
            meditation, New Anxieties offers seven takes on a world in turmoil
            that are each as unique as they are coherent as a whole.`,
            releaseProducer: 'Produced by Lymbs',
            releaseMastering: 'Simon Hawemann',
            releaseArtwork: 'Artwork by Sarah Kowalewski',
          },
        ],
      },
    };
  },
};
</script>
