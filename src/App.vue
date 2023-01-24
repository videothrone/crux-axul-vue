<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
</script>

<template>
  <header id="header_content">
    <RouterLink to="/" id="header_logo">
      <img
        src="@/assets/img/CXASticker2022PNG.png"
        alt="Crux Axul Circle Logo"
        class="cxa-circle-logo"
      />
    </RouterLink>
    <Nav />
  </header>
  <div id="content"><RouterView /></div>
</template>

<style lang="scss">
@import '@/assets/base.scss';
@import '@/assets/nav.scss';

/* ANIMATION LOGO */
@media (prefers-reduced-motion: no-preference) {
  .cxa-circle-logo {
    animation: logo-spin infinite 20s linear;
    animation-play-state: running;
  }
  #header_logo .cxa-circle-logo:hover {
    animation-play-state: paused;
  }
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
