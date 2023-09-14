<template>
  <ul class="content__releases">
    <li class="content__releases-card">
      <a href="/releases/fever-bells"
        ><img src="@/assets/img/CXA001_thumb.jpg" />
        <div>Lymbs - Fever Bells</div>
        <div class="content__releases-card-cat">→ CXA001</div>
      </a>
    </li>
    <!-- <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/fever-bells"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA001_thumb.jpg" />
        <div>Lymbs - Fever Bells</div>
        <div class="content__releases-card-cat">→ CXA001</div></a
      >
    </li> -->
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/new-anxieties"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA002_thumb.jpg" />
        <div>VA - New Anxieties</div>
        <div class="content__releases-card-cat">→ CXA002</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/among-nights-feral-laws"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA003_thumb.jpg" />
        <div>Sankt & Lymbs - Among Nights / Feral Laws</div>
        <div class="content__releases-card-cat">→ CXA003</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/teal-tear"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA004_thumb.jpeg" />
        <div>Opalglas - Teal / Tear</div>
        <div class="content__releases-card-cat">→ CXA004</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/inganical"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA005_thumb.jpeg" />
        <div>Sankt - Inganical</div>
        <div class="content__releases-card-cat">→ CXA005</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/crux-i-terminal-beaches"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA006_thumb.jpg" />
        <div>Lymbs - Crux I: Terminal Beaches</div>
        <div class="content__releases-card-cat">→ CXA006</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/crux-ii-angles-morts"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA007_thumb.jpg" />
        <div>Sankt - Crux II: Angles Morts</div>
        <div class="content__releases-card-cat">→ CXA007</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/crux-iii-3-ht-xon"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA008_thumb.jpg" />
        <div>Circular Square - Crux III: 3-HT-(xon)</div>
        <div class="content__releases-card-cat">→ CXA008</div></a
      >
    </li>
    <li class="content__releases-card">
      <a
        href="https://cruxaxul.bandcamp.com/album/crux-iv-odd-arches"
        rel="noreferrer noopener"
        target="_blank"
        ><img src="@/assets/img/CXA009_thumb.jpg" />
        <div>Fels - Crux IV: Odd Arches</div>
        <div class="content__releases-card-cat">→ CXA009</div></a
      >
    </li>
  </ul>
</template>

<style lang="scss">
@import 'sass-mq/mq';

:root {
  --content-card-font-color: black;
}

.content__releases {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 100%;

  @include mq($from: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
}

.content__releases .content__releases-card {
  background-color: var(--main-color);
}

.content__releases .content__releases-card:hover {
  background-color: var(--sec-color);
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card:hover div {
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card div {
  line-height: 1.2;
  color: var(--content-card-font-color);
  padding-left: 1rem;
}

.content__releases .content__releases-card div:nth-child(3) {
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}

.content__releases .content__releases-card img {
  max-width: 100%;
  margin-bottom: 0.5rem;
}

.content__releases .content__releases-card-cat {
  font-size: 1.4rem;
  color: var(--content-card-font-color);

  @include mq($from: 768px) {
    font-size: 1.6rem;
  }
}

.content_links {
  display: block;
  font-size: 1.6rem;
  margin-top: 2rem;
}

.content_links hr.hrr_releases {
  border: none;
  border-top: 0.15rem dashed var(--sec-color);
  margin: 1rem 0;
}
</style>
