'use strict';

const menuBurder = document.querySelector('.menu-burder');
const menuList = document.querySelector('.menu-list');
const spanBurger = menuBurder.querySelectorAll('span');
console.log(spanBurger);

document.addEventListener('click', (e) => {
    if (e.target === menuBurder || e.target.classList.contains('menu-burder__span')) {
      menuBurder.classList.toggle('menu-burder_active');
      menuList.classList.toggle('menu-list_active');
      
    } else {
      menuBurder.classList.remove('menu-burder_active');
      menuList.classList.remove('menu-list_active');
    }

})