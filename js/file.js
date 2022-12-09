'use strict';


const inputs = document.querySelectorAll('.input__file');

inputs.forEach(input => {
  // const label = input.nextElementSibling;
  
  // console.log(labelVal);
  input.addEventListener('change', (e) => {
    let labelVal = document.querySelector('.input__file-text').innerText;
    console.log(labelVal);
    let countFiles = e.target.files.length;
    // console.log(e.target.files);
    // let countFiles = "";
    if(e.target.files && e.target.files.length > 0) {
      // let countFiles = e.target.files.length;
      return labelVal = `Выбрано файлов: ${countFiles}`;
      // console.log(labelVal);
      // console.log(countFiles);
    }

    // if(countFiles) {
    //   labelVal = `Выбрано файлов: ${countFiles}`
    // } else {
    //   labelVal
    // }
  })
})
// Array.prototype.forEach.call(inputs, function (input) {
//   let label = input.nextElementSibling,
//     labelVal = label.querySelector('.input__file-button').innerText;

//   input.addEventListener('change', function (e) {
//     let countFiles = '';
//     if (this.files && this.files.length >= 1)
//       countFiles = this.files.length;

//     if (countFiles)
//       label.querySelector('.input__file-button').innerText = 'Выбрано файлов: ' + countFiles;
//     else
//       label.querySelector('.input__file-button').innerText = labelVal;
//   });
// }); 