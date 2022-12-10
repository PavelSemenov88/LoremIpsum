'use strict';

const buttonSubmit = document.querySelector('.button-form');
const inputSubmit = document.querySelectorAll('.input-submit');
const buttonErrorMessage = document.querySelector('.button__error-message');

buttonSubmit.addEventListener('click', () => {
  let data = {};
  inputSubmit.forEach(({ name, value }) => {
    if (name && value.trim() !== '') {
      data[name] = value;

    }
  })

  if (Object.keys(data).length < 3) {
    buttonErrorMessage.textContent = 'Заполните все поля';
    buttonErrorMessage.style.color = "red";
    buttonErrorMessage.classList.add('button__error-message_vanish');
    setTimeout(() => {buttonErrorMessage.classList.remove('button__error-message_vanish')}, 2000);

  } else {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status)
        }
      })
      .then(data => {
        buttonErrorMessage.style.color = "white";
        buttonErrorMessage.classList.add('button__error-message_vanish');
        setTimeout(() => {buttonErrorMessage.classList.remove('button__error-message_vanish')}, 2000);

        inputSubmit.forEach(input => {
          if (input.name == 'dropdown') {
            document.querySelector('.dropdown__button').textContent = 'Выберите тип системы';
            input.value = "";
          } else if (input.name == 'mail' || input.name == 'name') {
            input.value = "";
          } else if (input.name == 'range') {
            rangeInput.value = 75;
            rangeContentNum.textContent = '75%';
          } else if (input.name == 'file') {
            document.querySelector('.input__file-text').innerHTML = 'ПРИКРЕПИТЬ ФАЙЛ';
          }
        })

      })
      .catch(error => {
        console.log('ERROR: ' + error.message)
      })
  }

})
