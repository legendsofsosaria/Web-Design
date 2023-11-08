"use strict";

/*
   Index Image Slideshow
   Author: Elizabeth Gress
   Date:  11/03/2023 

*/

const images = ['Assets/pipingbags.jpg', 'Assets/decoratecake.jpg', 'Assets/cocoacake.jpg', 'Assets/cupcakedecorate.jpg'];
let currentImage = 0;
const slideshow = document.getElementById('slideshow');

/* Hide all images except the first one initially, so there isn't weird overlap */
for (let i = 1; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
}

/* Function to change the images */
function changeImage() {
    currentImage = (currentImage + 1) % images.length;
    slideshow.src = images[currentImage];
}

setInterval(changeImage, 2000); /* Set the interval of the image changing */