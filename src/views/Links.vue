<template>
  <div class="content__links">
    <div class="content__links__link content__links-interview">
      <a
        href="http://www.fluxwebzine.it/en/interview-with-sankt-and-lymbs/"
        rel="noreferrer noopener"
        target="_blank"
        >Label Interview</a
      >
    </div>
    <hr class="hrr hrr__links" />
    <div class="content__links__link">
      <a
        href="https://cruxaxul.bandcamp.com/"
        rel="noreferrer noopener"
        target="_blank"
        >Buy Tapes & Digital (Bandcamp)</a
      >
    </div>
    <div class="content__links__link">
      <a
        href="https://soundcloud.com/cruxaxul"
        rel="noreferrer noopener"
        target="_blank"
        >Soundcloud</a
      >
    </div>
    <div class="content__links__link">
      <a
        href="https://www.instagram.com/crux.axul/"
        rel="noreferrer noopener"
        target="_blank"
        >Instagram</a
      >
    </div>
    <div class="content__links__link">
      <a
        href="https://www.facebook.com/CruxAxulRec"
        rel="noreferrer noopener"
        target="_blank"
        >Facebook</a
      >
    </div>
    <div class="content__links__link">
      <a
        href="https://www.mixcloud.com/cruxaxul/"
        rel="noreferrer noopener"
        target="_blank"
        >Mixes & Radioshows</a
      >
    </div>
    <div class="content__links__link">
      <a
        href="https://www.youtube.com/channel/UCcKD1XMRMXVhO5wL29qiE4A"
        rel="noreferrer noopener"
        target="_blank"
        >Youtube</a
      >
    </div>
  </div>
</template>

<style lang="scss">
@use 'sass-mq/mq';
// Font sizes
$font-size-large: 2.2rem;
$font-size-default: 2rem;
$font-size-small: 1.8rem;

.content__links {
  margin-top: 2rem;
  width: 100%;

  @include mq.mq($from: xl) {
    margin-top: 0;
  }
}

.content__links__link {
  font-size: 2.2rem;

  @include mq.mq($from: xl) {
    font-size: $font-size-default;
  }
}

hr.hrr__links {
  border: none;
  border-top: 0.2rem dashed var(--sec-color);
  margin: 1rem 0;
}
</style>
