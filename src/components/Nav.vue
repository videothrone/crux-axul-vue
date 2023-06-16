<template>
  <nav class="header__menu js-nav">
    <button
      class="header__menu-button"
      id="header__menu-button"
      aria-expanded="false"
      aria-controls="header-menu"
    >
      <div class="header__menu-button-bar"></div>
      <span class="header__menu-text">Navigation closed</span>
    </button>
    <div class="nav-list-container">
      <ul class="nav-list">
        <li class="nav-list__item">
          <RouterLink to="/releases" id="releases" target="_self"
            >Releases</RouterLink
          >
        </li>
        <li class="nav-list__item">
          <RouterLink to="/links" id="links" target="_self">Links</RouterLink>
        </li>
        <li class="nav-list__item">
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
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.header__menu-button')) {
    const hamburger = document.querySelector('.header__menu-button');
    const navMenuContainer = document.querySelector('.nav-list-container');
    const navMenu = document.querySelector('.nav-list');
    const navMenuItems = document.querySelectorAll('.nav-list__item');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenuContainer.classList.toggle('nav-list-container--open');
      navMenu.classList.toggle('active');
    });

    navMenuItems.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuContainer.classList.remove('nav-list-container--open');
        navMenu.classList.remove('active');
      });
    });
  }
});
</script>

<style lang="scss">
@import 'sass-mq/mq';

.header__menu {
  font-family: 'UnifrakturCook-Bold-Terrible', Helvetica, Arial, serif;

  @include mq($until: 768px) {
    font-size: 3rem;
    margin-top: 0;
  }

  @include mq($from: 768px) {
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
  width: 5rem;

  @include mq($from: 768px) {
    display: none;
  }
}

.header__menu-button-bar,
.header__menu-button::after,
.header__menu-button::before {
  background-color: #564cac;
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
  @include mq($until: 768px) {
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
  padding-top: 11rem;
  visibility: visible;
  width: 100vw;
  z-index: 103;
}

.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding-left: 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
}

@media (max-width: 768px) {
  .nav-list:not(.nav-list.active) {
    display: none;
  }
}

.nav-list .nav-list__item {
  display: block;
  margin: 0 0 5rem 0;
  text-align: center;

  @include mq($from: 768px) {
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
