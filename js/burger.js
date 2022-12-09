'use strict';

const menuBurder = document.querySelector('.menu-burder');
const menuList = document.querySelector('.menu-list')

document.addEventListener('click', (e) => {
  if (e.target === menuBurder) {
    menuBurder.classList.toggle('menu-burder_active');
    menuList.classList.toggle('menu-list_active');
  } else {
    menuBurder.classList.remove('menu-burder_active');
    menuList.classList.remove('menu-list_active');
  }
})