<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/nav/Nav.vue';
</script>

<template>
  <header class="header__content">
    <RouterLink to="/" class="header__logo">
      <img
        src="/assets/img/CXASticker2023trans.png"
        alt="Crux Axul Circle Logo"
        class="cxa-circle-logo"
      />
    </RouterLink>
    <Nav />
  </header>
  <main class="content"><RouterView /></main>
</template>
