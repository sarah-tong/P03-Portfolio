"use strict";

console.log("Script is running!");

window.onscroll = function() {myFunction()};

var backButton = document.querySelector(".back-desktop a");

function myFunction() {
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
      backButton.classList.add("show");
      backButton.classList.remove("hide");
    } else {
      backButton.classList.remove("show");
      backButton.classList.add("hide");
    }
  }
// https://www.w3schools.com/jsref/prop_element_scrolltop.asp
