"use strict";

/*
   Counter Clock
   Author: Elizabeth Gress
   Date:  10/19/2023 

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval(runClock, 1000);

/* Function to create and run the countdown clock */
function runClock() {
  /* Store the current date and time */
  var currentDay = new Date();

  /* Calculate time elapsed from the opening date */
  var openingDate = new Date("April 28, 2021 16:47:00");

  /* Calculate years */
  var yearsOpen = currentDay.getFullYear() - openingDate.getFullYear();
  var monthsOpen = currentDay.getMonth() - openingDate.getMonth();
  var daysOpen = currentDay.getDate() - openingDate.getDate();
  var hrsOpen = currentDay.getHours() - openingDate.getHours();
  var minsOpen = currentDay.getMinutes() - openingDate.getMinutes();

  if (minsOpen < 0) {
    minsOpen += 60;
    hrsOpen--;
  }
  if (hrsOpen < 0) {
    hrsOpen += 24;
    daysOpen--;
  }
  if (daysOpen < 0) {
    var lastDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate();
    daysOpen += lastDayOfMonth;
    monthsOpen--;
  }
  if (monthsOpen < 0) {
    monthsOpen += 12;
    yearsOpen--;
  }

  /* Display the time left until the opening date */
  document.getElementById("years").textContent = yearsOpen;
  document.getElementById("months").textContent = monthsOpen;
  document.getElementById("days").textContent = daysOpen;
  document.getElementById("hrs").textContent = hrsOpen;
  document.getElementById("mins").textContent = minsOpen;
}
	
	