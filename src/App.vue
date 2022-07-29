<script setup>
import { RouterLink, RouterView } from "vue-router";
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
    <nav id="header_menu">
      <ul>
        <li>
          <RouterLink
            to="/releases"
            id="releases"
            rel="noreferrer noopener"
            target="_self"
            >Releases</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/links"
            id="links"
            rel="noreferrer noopener"
            target="_self"
            >Links</RouterLink
          >
        </li>
        <li>
          <a
            href="mailto:cruxaxulrec@gmail.com"
            rel="noreferrer noopener"
            target="_self"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
  <div id="content"><RouterView /></div>
</template>

<style>
@import "@/assets/base.css";

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
