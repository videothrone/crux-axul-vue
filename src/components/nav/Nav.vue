<template>
  <nav class="header__menu" @keydown.esc="onKeydown">
    <button
      :class="{ active: isMenuOpen }"
      class="header__menu-button"
      :aria-expanded="isAriaExpanded"
      aria-controls="header__menu"
      @click="toggleNavMenu"
      type="button"
    >
      <div class="header__menu-button-bar"></div>
      <span class="header__menu-text" v-if="isMenuOpen">Navigation open</span>
      <span class="header__menu-text" v-else>Navigation closed</span>
    </button>
    <div class="nav-list-container" :class="{ 'nav-list-container--open': isMenuOpen }">
      <svg class="nav-triangle" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" preserveAspectRatio="none">
        <defs>
          <clipPath id="nav-clip">
            <polygon points="0,100 100,0 150,0 150,100" />
          </clipPath>
        </defs>
        <polygon points="0,100 100,0 150,0 150,100" fill="var(--main-color)" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="var(--sec-color)" stroke-width="10" stroke-linecap="square" vector-effect="non-scaling-stroke" clip-path="url(#nav-clip)" />
      </svg>
      <ul class="nav-list" role="list" :class="{ active: isMenuOpen }">
        <li class="nav-list__item" role="listitem" @click="closeNavMenu">
          <RouterLink :to="{ name: 'releases' }" id="releases" target="_self"
            >Releases</RouterLink
          >
        </li>
        <li class="nav-list__item" role="listitem" @click="closeNavMenu">
          <RouterLink :to="{ name: 'links' }" id="links" target="_self">Links</RouterLink>
        </li>
        <li class="nav-list__item" role="listitem" @click="closeNavMenu">
          <a
            href="mailto:cruxaxulrec@gmail.com"
            rel="noreferrer noopener"
            target="_self"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const isAriaExpanded = ref(false);

const toggleNavMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  isAriaExpanded.value = !isAriaExpanded.value;

  // Prevent scrolling when menu is open
  if (document.body.style.position === '') {
    document.body.style.position = 'fixed';
  } else {
    document.body.style.position = '';
  }
};

const closeNavMenu = () => {
  isMenuOpen.value = false;
  document.body.style.position = '';
};

const onKeydown = (event) => {
  // Close overlay on ESC (works only on focus for now)
  if (event.keyCode === 27) {
    event.preventDefault();
    closeNavMenu();
  }
};
</script>

<style lang="scss">
@use './Nav.scss';
</style>
