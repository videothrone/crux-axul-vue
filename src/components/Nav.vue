<template>
  <nav id="header_menu">
    <button class="hamburger" aria-label="menu">
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    </button>
    <div class="nav-list-container">
      <ul class="nav-list">
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
    </div>
  </nav>
</template>

<script>
let slideLoaded = setInterval(function () {
  if (document.querySelector(".hamburger")) {
    console.log("Exists!");
    clearInterval(slideLoaded);
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-list");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      console.log("click");
    });
  }
}, 100); // check every 100ms
</script>

<style lang="scss">
@import "@/components/nav.scss";
</style>
