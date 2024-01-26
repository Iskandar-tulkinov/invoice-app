"use strict";
const filterBtn = document.querySelector(".filter")
const filterIcon = document.querySelector(".filter__icon");
const filterList = document.querySelector(".filter__list")
const filterListItems = document.querySelectorAll(".filter__list__item")

filterBtn.addEventListener("click", (e)=>{
  e.stopPropagation()
  filterList.classList.toggle("active")
  filterIcon.classList.toggle("rotated")
})

filterListItems.forEach(item => {
  item.addEventListener("click", (e)=>{
    e.stopPropagation()
     // Check if the click occurred on the input or text
     const target = e.target;
     if (target.tagName === 'INPUT') {
       const checkboxes = item.querySelectorAll('input[type="checkbox"]');
       checkboxes.forEach(checkbox => {
         checkbox.checked = !checkbox.checked;
       });
     }
    // Toggle the checked state of all checkboxes within the clicked list item
    const checkboxes = item.closest('.filter__list__item').querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = !checkbox.checked;
    });
  })
})
document.body.addEventListener("click", (e) => {
  filterList.classList.remove("active");
  filterIcon.classList.remove("rotated");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    filterList.classList.remove("active");
    filterIcon.classList.remove("rotated");
    closeModal()
  }
});

const addNewInvoiceBtn = document.querySelector(".btn-new-invoice")
const mainModal= document.querySelector(".main-modal");
const overlay = document.querySelector(".overlay");
addNewInvoiceBtn.addEventListener("click", (e) => {
  e.preventDefault()
  mainModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
})
function closeModal() {
  mainModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
}