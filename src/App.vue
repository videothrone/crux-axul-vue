<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/nav/Nav.vue';
</script>

<template>
  <header class="header__content">
    <a class="screen-reader-text" href="#site-content">Jump to main content</a>
    <h1 class="screen-reader-text">Crux Axul Records</h1>
    <RouterLink to="/" class="header__logo">
      <img
        src="/assets/img/CXASticker2023trans.png"
        alt="Crux Axul Logo"
        class="cxa-circle-logo"
      />
    </RouterLink>
    <Nav />
  </header>
  <main class="content" id="site-content"><RouterView /></main>
</template>
