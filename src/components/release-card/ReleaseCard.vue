<template>
  <article class="release-card" :class="$attrs.class">
    <div class="release-card__image-wrapper">
      <img :src="`/assets/img/${releaseImg}`" :alt="`Cover of ${releaseTitle} by ${releaseArtist}`" class="release-card__image" loading="lazy" />
    </div>

    <div class="release-card__info">
      <div v-if="isRouterLink" class="release-card__info-artist">{{ releaseArtist }} —</div>
      <component :is="isRouterLink ? 'RouterLink' : 'a'"
        :to="isRouterLink ? { name: 'ReleaseDetails', params: { releaseDetails: releaseId } } : undefined"
        :href="!isRouterLink ? releaseLink : undefined"
        :rel="!isRouterLink ? 'noreferrer noopener' : undefined"
        :target="!isRouterLink ? '_blank' : undefined"
        class="release-card__link"
        :aria-label="`${releaseTitle} by ${releaseArtist}`">
        {{ releaseTitle }}
      </component>
      <div class="release-card__info-catnr">→ {{ releaseNumber }}</div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  isRouterLink: {
    type: Boolean,
    default: false
  },
  releaseId: String,
  releaseLink: String,
  releaseTitle: String,
  releaseArtist: String,
  releaseImg: String,
  releaseNumber: String,
});
</script>

<style lang="scss" scoped>
@use './ReleaseCard.scss';
</style>
