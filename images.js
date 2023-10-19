"use strict";

/*
   Index Image Slideshow
   Author: Elizabeth Gress
   Date:  10/19/2023 

*/

const images = ['Assets/pipingbags.jpg', 'Assets/decoratecake.jpg', 'Assets/cocoacake.jpg', 'Assets/cupcakedecorate.jpg'];
let currentImage = 0;
const slideshow = document.getElementById('slideshow');

// Hide all images except the first one initially
for (let i = 1; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
}

function changeImage() {
    currentImage = (currentImage + 1) % images.length;
    slideshow.src = images[currentImage];
}

setInterval(changeImage, 2000); //