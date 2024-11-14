<template>
  <component :is="isRouterLink ? 'RouterLink' : 'a'"
    :to="isRouterLink ? { name: 'ReleaseDetails', params: { releaseDetails: releaseId } } : undefined"
    :href="!isRouterLink ? releaseLink : undefined" :rel="!isRouterLink ? 'noreferrer noopener' : undefined"
    :target="!isRouterLink ? '_blank' : undefined" class="release-link" :class="$attrs.class"
    :aria-label="`${releaseTitle} by ${releaseArtist}`">
      <img :src="`/assets/img/${releaseImg}`" :alt="`Cover of ${releaseTitle} by ${releaseArtist}`"
        class="release-link__image" loading="lazy" />
    <div class="release-link__info">
      <div v-if="isRouterLink" class="release-link__info-artist">{{ releaseArtist }}</div>
      <div class="release-link__info-title">{{ releaseTitle }}</div>
      <div class="release-link__info-catnr">→ {{ releaseNumber }}</div>
    </div>
  </component>
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
@import './ReleaseLink.scss';
</style>
