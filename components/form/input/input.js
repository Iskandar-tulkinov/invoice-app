"use strict";
const numberInputs = document.querySelectorAll('.input-number')
// numberInputs.forEach(function(input){
// input.addEventListener('input', function(event){
//   const inputValue=event.target.value.replace(/\D/g, '')
//   event.target.value = inputValue.trim()
// })
// })
numberInputs.forEach((input) => {
  input.addEventListener("input", function () {
    // Remove non-numeric characters using a regular expression
    this.value = this.value.replace(/[^0-9.]/g, '');

    // If there are multiple decimal points, remove all but the first one
    const decimalCount = (this.value.match(/\./g) || []).length;
    if (decimalCount > 1) {
      const lastIndex = this.value.lastIndexOf('.');
      this.value = this.value.substring(0, lastIndex) + this.value.substring(lastIndex + 1);
    }
  });
});
