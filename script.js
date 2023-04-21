let menu = document.querySelector('.menu-open');
let navbar = document.querySelector('.main-nav');
let menuIcon = menu.querySelector('img');
let overlay = document.querySelector('.overlay');

menu.onclick = () => {
  menu.classList.toggle('menu-close');
  navbar.classList.toggle('open');
  menu.classList.toggle('menu-fixed');
  overlay.classList.toggle('active');
  if (menu.classList.contains('menu-close')) {
    menuIcon.src = 'assets/images/icon-menu-close.svg';
  } else {
    menuIcon.src = 'assets/images/icon-menu.svg';
  }
};