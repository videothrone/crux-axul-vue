<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
</script>

<template>
  <header class="header__content">
    <RouterLink to="/" class="header__logo">
      <img
        src="@/assets/img/CXASticker2023trans.png"
        alt="Crux Axul Circle Logo"
        class="cxa-circle-logo"
      />
    </RouterLink>
    <Nav />
  </header>
  <div class="content"><RouterView /></div>
</template>

<style lang="scss">
@import '@/assets/base.scss';
@import '@/assets/release-detail.scss';

/* ANIMATION LOGO */
@media (prefers-reduced-motion: no-preference) {
  .cxa-circle-logo {
    animation: logo-spin infinite 20s linear;
    animation-play-state: running;
  }
  .header__logo .cxa-circle-logo:hover {
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
