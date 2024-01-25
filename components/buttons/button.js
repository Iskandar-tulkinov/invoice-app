"use strict";
const customBtns= document.querySelectorAll("button");

customBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});