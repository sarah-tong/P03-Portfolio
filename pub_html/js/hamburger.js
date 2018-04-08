"use strict";

// var navToggle = document.querySelector(".hamburger-menu");
// var navWrapper = document.querySelector(".nav-wrapper");
// var pageWrapper = document.querySelector(".main-content-wrapper");
var hamburgerMenuCheckbox = document.querySelector(".hamburger-menu-checkbox");

// navToggle.addEventListener("click", function() {
//   navToggle.classList.toggle("toggle");
//   navWrapper.classList.toggle("toggle");
//   pageWrapper.classList.toggle("toggle");
// });

window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    if (hamburgerMenuCheckbox.checked) {
      hamburgerMenuCheckbox.checked = false;
    // if (navToggle.classList.contains("toggle")) {
    //   navToggle.classList.remove("toggle");
    //   navWrapper.classList.remove("toggle");
    //   pageWrapper.classList.remove("toggle");
    }
  }
});

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// nav: https://bootstrapious.com/p/bootstrap-sidebar
// toggle: https://stackoverflow.com/questions/18880890/how-do-i-toggle-an-elements-class-in-pure-javascript
// resize: https://www.w3schools.com/jsref/event_onresize.asp
