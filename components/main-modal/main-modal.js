"use strict";
document.addEventListener("DOMContentLoaded",function(e) {

  window.addEventListener("scroll", () => {
    const buttonsWrapper = document.querySelector(".buttons-wrapper");

    // Check if the window has been scrolled
    if (window.scrollY) {
      // Add the "active" class to .buttons-wrapper::before
      buttonsWrapper.classList.add("active");
    } else {
      // Remove the "active" class if the window is not scrolled
      buttonsWrapper.classList.remove("active");
    }
  });

  let itemsList = document.querySelector('.items-list');
  const addItemBtn = document.querySelector('.add-item-btn');

  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <span>
        <input class="input w-54" type="text" name="items-name" placeholder="Banner Design">
        <span class="error-message">can’t be empty</span>
      </span>
      <span>
        <input class="input input-quantity w-12 h-12 input-number" inputmode="numeric" type="number" name="quantity" placeholder="1">
        <!-- <span class="error-message">can’t be empty</span> -->
      </span>
      <span>
        <input class="input input-price w-25 input-number" inputmode="numeric" type="number" name="price" placeholder="156.00">
        <span class="error-message">can’t be empty</span>
      </span>
      <span class="items-total-price-wrapper">
        <span class="items-total-price">0.00</span>
        <i onclick="deleteItem(this)" class="icon-delete-icon"></i>
      </span>
    `;
    itemsList.appendChild(newItem);


  });
  // Add event listener for delete action
  itemsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-delete-icon")) {
      deleteItem(e.target);
    }
  });
  function deleteItem(element) {
    const listItem = element.closest('.item');
// console.log('deleteItem');
    if (listItem) {
      listItem.remove();
    }
  }
    // Add event listeners for input fields
    const inputQuantities = document.querySelectorAll('.input-quantity');
    const inputPrices = document.querySelectorAll('.input-price');
 // Add event listeners for input fields
 inputQuantities.forEach((input) => {
  input.addEventListener("input", updateTotalPrice);
});

inputPrices.forEach((input) => {
  input.addEventListener("input", updateTotalPrice);
});

function updateTotalPrice() {
  const item = this.closest('.item');
  const inputQuantity = item.querySelector('.input-quantity');
  const inputPrice = item.querySelector('.input-price');
  const itemsTotalPrice = item.querySelector('.items-total-price');

  // Ensure both input fields have valid numeric values
  const quantity = parseFloat(inputQuantity.value) || 0;
  const price = parseFloat(inputPrice.value) || 0;

  // Calculate and update the total price
  const totalPrice = (quantity * price).toFixed(2);
  itemsTotalPrice.textContent = totalPrice;
}

});