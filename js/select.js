'use strict';


const select = document.querySelectorAll('.select');

select.forEach((selectWrapper) => {
  const dropdownButton = selectWrapper.querySelector('.dropdown__button');
  const dropdownList = selectWrapper.querySelector('.dropdow__list');
  const dropdowListItem = selectWrapper.querySelectorAll('.dropdow__list-item');
  const dropdownInputHidde = selectWrapper.querySelector('.dropdown__input-hidden');

  document.addEventListener('click', (e) => {
    
    if (e.target === dropdownButton) {
      e.preventDefault();
      dropdownList.classList.toggle('dropdow__list_visible');
    } else {
      dropdownList.classList.remove('dropdow__list_visible');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropdownList.classList.remove('dropdow__list_visible')
    }
  })

  dropdowListItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const text = e.target.innerText
      dropdownButton.innerText = text;

      const value = item.dataset.value;
      dropdownInputHidde.value = value;

      dropdownList.classList.remove('dropdow__list_visible');
    })
  })

})






