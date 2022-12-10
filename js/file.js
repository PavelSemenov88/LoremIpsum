'use strict';

const inputsFile = document.querySelectorAll('.input__file');

inputsFile.forEach(input => {
  let labelVal = document.querySelector('.input__file-text');

  input.addEventListener('change', (e) => {
    const countFiles = input.files.length;
    
    if(e.target.files && e.target.files.length > 0) {
      labelVal.innerText = `Выбрано файлов: ${countFiles}`;
    }
  })
})
