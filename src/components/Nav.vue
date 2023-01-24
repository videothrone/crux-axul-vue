<template>
  <nav id="header_menu">
    <button class="hamburger" aria-label="menu">
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
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
  if (document.querySelector('.hamburger')) {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-list');
    const navMenuItems = document.querySelectorAll('.nav-list__item');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navMenuItems.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    });
  }
});
</script>
