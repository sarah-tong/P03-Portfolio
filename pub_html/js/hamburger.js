"use strict";

// console.log("Script is running!");

var windowWidth = window.innerWidth;
console.log("Window width: " + windowWidth);

var navToggle = document.querySelector(".mobile-nav");
var navWrapper = document.querySelector(".nav-wrapper");
// var pageWrapper = document.querySelector(".page-wrapper");


// if (windowWidth > 768) {
//   navToggle.classList.add("open");
//   navWrapper.classList.add("open");
// }
//
// if (windowWidth < 768) {
//   navToggle.classList.add("close");
//   navWrapper.classList.add("close");
// }

navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("toggle");
  navWrapper.classList.toggle("toggle");
  // pageWrapper.classList.toggle("toggle");
  // if (navToggle.classList.contains("open")) {
  //   console.log("#mobile-nav open, now closed.");
  //
  //   navToggle.classList.remove("open");
  //   navWrapper.classList.remove("open");
  //
  //   navToggle.classList.add("close");
  //   navWrapper.classList.add("close");
  //
  // } else {
  //   console.log("#mobile-nav close, now open.");
  //
  //   navToggle.classList.add("open");
  //   navWrapper.classList.add("open");
  //
  //   navToggle.classList.remove("close");
  //   navWrapper.classList.remove("close");
  // }
});

// nav: https://bootstrapious.com/p/bootstrap-sidebar
// toggle: https://stackoverflow.com/questions/18880890/how-do-i-toggle-an-elements-class-in-pure-javascript
