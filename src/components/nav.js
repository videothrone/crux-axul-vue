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
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    });
  }
});
