<template>
  <nav class="header__menu" @keydown.esc="onKeydown">
    <button
      :class="{ active: isMenuOpen }"
      class="header__menu-button"
      :aria-expanded="isAriaExpanded"
      aria-controls="header__menu"
      @click="toggleNavMenu"
    >
      <div class="header__menu-button-bar"></div>
      <span class="header__menu-text" v-if="isMenuOpen">Navigation open</span>
      <span class="header__menu-text" v-else>Navigation closed</span>
    </button>
    <div class="nav-list-container" :class="{ 'nav-list-container--open': isMenuOpen }">
      <ul class="nav-list" :class="{ active: isMenuOpen }">
        <li class="nav-list__item" @click="closeNavMenu">
          <RouterLink :to="{ name: 'releases' }" id="releases" target="_self"
            >Releases</RouterLink
          >
        </li>
        <li class="nav-list__item" @click="closeNavMenu">
          <RouterLink :to="{ name: 'links' }" id="links" target="_self">Links</RouterLink>
        </li>
        <li class="nav-list__item" @click="closeNavMenu">
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

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isAriaExpanded: false
    };
  },
  methods: {
    toggleNavMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isAriaExpanded = !this.isAriaExpanded;

      if (document.body.style.position === '') {
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = '';
      }
    },
    closeNavMenu() {
      this.isMenuOpen = false;
      document.body.style.position = '';
    },
    onKeydown(event) {
    // Close overlay on ESC (works only on focus for now)
      if (event.keyCode === 27) {
        event.preventDefault();
        this.closeNavMenu();
      }
    }
  }
};
</script>

<style lang="scss">
@import './Nav.scss';
</style>
