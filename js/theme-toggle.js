"use strict";
const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", ()=>{
  setTimeout(toggleTheme,100)})

// Retrieve the theme from localStorage on page load
const savedTheme = localStorage.getItem("theme");

// Set initial theme based on localStorage or default to light theme
// document.body.classList.toggle("dark-theme", savedTheme === "dark");
if(savedTheme==="dark"){
  document.body.classList.toggle("dark-theme");
  themeToggler.setAttribute("class", "icon-sun");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  // Save the current theme state to localStorage
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");

  // Update theme toggler w image based on the new theme
  if (document.body.classList.contains("dark-theme")) {
    themeToggler.setAttribute("class", "icon-sun");
  } else {
    themeToggler.setAttribute("class", "icon-moon");
  }

}
