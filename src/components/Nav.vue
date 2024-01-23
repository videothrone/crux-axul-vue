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
    // Close overlay on ESC
      if (event.keyCode === 27) {
        event.preventDefault();
        this.closeNavMenu();
      }
    }
  }
};
</script>

<style lang="scss">
@use 'sass-mq/mq';
// Font sizes
$font-size-large: 2.2rem;
$font-size-default: 2rem;
$font-size-small: 1.8rem;

.header__menu {
  font-family: 'UnifrakturCook-Bold-Terrible', Helvetica, Arial, serif;

  @include mq.mq($until: l) {
    font-size: 3rem;
    margin-top: 0;
  }

  @include mq.mq($from: l) {
    font-size: calc(1rem + 2vmin);
    margin-top: 2.5rem;
  }

  // @media all and (max-width: 935px) {
  //   font-size: calc(1rem + 1vmin);
  // }
}

.header__menu-button {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  margin: -0.5rem -0.5rem 0 0;
  width: 5rem;

  @include mq.mq($from: l) {
    display: none;
  }
}

.header__menu-button-bar,
.header__menu-button::after,
.header__menu-button::before {
  background-color: var(--main-color);
  content: '';
  display: block;
  height: 0.4rem;
  margin: 0.6rem 0;
  transition: 0.3s;
  width: 100%;
}

.header__menu-button.active::before {
  transform: translate(0, 1rem) rotate(-45deg);
}

.header__menu-button.active::after {
  transform: translate(0, -1rem) rotate(45deg);
}

.header__menu-button.active .header__menu-button-bar {
  opacity: 0;
}

.header__menu-text {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.nav-list-container {
  @include mq.mq($until: l) {
    background-color: var(--black-color);
    bottom: 0;
    height: 100vh;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: background-color 0.2s;
    visibility: hidden;
  }
}

.nav-list-container--open {
  background-color: var(--black-color);
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 12rem;
  visibility: visible;
  width: 100vw;
  z-index: 103;
}

.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6rem 0;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding-left: 0;
  position: relative;

  @include mq.mq($until: l) {
    flex-direction: column;
    justify-content: start;
  }

  @include mq.mq($from: l) {
    gap: 0;
  }
}

.nav-list:not(.nav-list.active) {
  @include mq.mq($until: l) {
    display: none;
  }
}

.nav-list__item {
  display: block;
  text-align: center;

  .router-link-active {
    color: var(--sec-color);
    font-style: italic;
  }

  @include mq.mq($from: l) {
    margin: 0.5rem 2rem;
  }
}

.active {
  background-color: black;
  left: 0;
  text-align: center;
  transition: 0.3s;
  z-index: 666;
  padding-left: 0;
  position: relative;
}
</style>
