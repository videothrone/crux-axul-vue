<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
     <RouterLink to="/" id="header_logo">
        <img src="@/assets/img/cxa-circle-logo.png" alt="Crux Axul Circle Logo" class="cxa-circle-logo" />
    </RouterLink>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

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
