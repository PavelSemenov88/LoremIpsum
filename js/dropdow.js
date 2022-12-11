'use strict';


const dropdow = document.querySelectorAll('.dropdow');

dropdow.forEach((dropdowWrapper) => {
  const dropdownButton = dropdowWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdowWrapper.querySelector('.dropdow__list');
  const dropdowListItem = dropdowWrapper.querySelectorAll('.list');
  const dropdownInputHidde = dropdowWrapper.querySelector('.dropdown__input-hidden');

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






