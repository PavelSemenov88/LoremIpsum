'use strict';

const rangeInput = document.querySelector('.range-input');
const rangeContentNum = document.querySelector('.range-content__num');

rangeInput.addEventListener('input', () => {
  rangeContentNum.textContent = rangeInput.value+"%";
  
})