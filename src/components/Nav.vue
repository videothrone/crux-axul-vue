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

<style lang="scss">
nav {
  font-family: 'UnifrakturCook-Bold-Terrible', Helvetica, Arial, serif;
  font-size: calc(1rem + 2vmin);
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  @media all and (max-width: 935px) {
    font-size: calc(1rem + 1vmin);
  }
}

nav > ul {
  list-style: none;
}

#header_menu {
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
  }
}

.hamburger {
  background-color: black;
  border: none;
  cursor: pointer;
  display: none;

  @media all and (max-width: 768px) {
    display: block;
    float: right;
    padding-right: 2.1rem;
    padding-top: 2.7rem;
  }

  .active {
    float: right;
    margin-top: 15rem;
  }
}

.hamburger-bar {
  -webkit-transition: all 0.3s ease-in-out;
  background-color: var(--main-color);
  display: block;
  height: 0.4rem;
  margin: 0.2em auto;
  transition: all 0.3s ease-in-out;
  width: 2.5rem;
}

// .nav-list-container {
//   @media (max-width: 768px) {
//     .hamburger &:not(.nav-list.active) {
//       display: none;
//     }
//   }
// }

.nav-list-container {
  @media (max-width: 768px) {
    margin-top: 10rem;
    width: 100vw;
  }
}

.nav-list.active .hamburger-bar:nth-child(2) {
  opacity: 0;
}

.nav-list.active .hamburger-bar:nth-child(1) {
  transform: translateY(0.8rem) rotate(45deg);
}

.nav-list.active .hamburger-bar:nth-child(3) {
  transform: translateY(-0.8rem) rotate(-45deg);
}

.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
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

.nav-list .active {
  height: 100vh;
  margin-top: 5rem;
}

.nav-list li {
  display: block;
  margin: 0.5rem 2rem;
  text-align: center;
}

.active {
  background-color: black;
  flex-direction: column;
  // height: 100vh;
  left: 0;
  // padding: 4rem 0;
  // position: absolute;
  text-align: center;
  // top: 12.5rem;
  transition: 0.3s;
  // width: 100%;
  z-index: 666;
}
</style>
