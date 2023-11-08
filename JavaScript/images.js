"use strict";

/*
   Photo Gallery Transform
   Author: Elizabeth Gress
   Date:  11/07/2023 

*/
/* Event works once HTML document is loaded */
document.addEventListener("DOMContentLoaded", function() {

  /* Get reference in HTML to modal */
  var modal = document.getElementById("imgModal");

  /* Gather all images with gallery-item class into a NodeList */
  var images = document.querySelectorAll(".gallery-item img");
  var modalImg = document.getElementById("img");

  /* Iterate through each image in the NodeList */
  images.forEach(image => {
      image.onclick = function() {
          modal.style.display = "block";
          modalImg.src = this.src; /* Sets src of model to clicked src */
      }
  });
 /* Finds the close element */
  var span = document.querySelector(".close");

  if (span) {
      span.onclick = function() { /* On click, set modal display to none, effectively hiding the modal */
          modal.style.display = "none";
      }
  }
});