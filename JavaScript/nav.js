"use strict";

/*
   Nav Menu
   Author: Elizabeth Gress
   Date:  11/08/2023 

*/

function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth <= 768) {
        x.classList.toggle("show-menu");
    }
}