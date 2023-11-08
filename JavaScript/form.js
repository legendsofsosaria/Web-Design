"use strict";
/*
   Author: Elizabeth Gress
   Date: 11/08/2023

   Filename: form.js


*/

/* Wait for the window to finish loading before executing the function */
window.addEventListener("load", function() {

   /* Get necessary elements from the DOM */
   var submitButton = document.getElementById("submit");
   var clearButton = document.getElementById("cancel");

   /* Event listener for the button click to submit order */
   submitButton.addEventListener("click", function (e) {

      /* Prevent default value of form submission */
      e.preventDefault();

      var firstName = document.getElementById("fname").value;
      var lastName = document.getElementById("lname").value;
      var street = document.getElementById("street").value;
      var city = document.getElementById("city").value;
      var province = document.getElementById("province").value;
      var postalCode = document.getElementById("postal-code").value;
      var phone = document.getElementById("phone").value;

      /* Only succeed if the required fields are filled out */
      if (firstName !== "" && lastName !== "" && street !== "" && city !== "" && province !== "" && postalCode !== "" && phone !== "") {

         /* Send alert for valid info */
         alert("Your order has been submitted!");
         window.location.href = "formsubmit.html";

         /* Clear the form */
         document.getElementById("fname").value = "";
         document.getElementById("lname").value = "";
         document.getElementById("street").value = "";
         document.getElementById("city").value = "";
         document.getElementById("province").value = "";
         document.getElementById("postal-code").value = "";
         document.getElementById("phone").value = "";
      }
      /* Alert the user if any input fields are incomplete */
      else {
         alert("Please enter a valid name, comment, and rating between 1 and 4.");
      }
   });
    /* Event listener for the button click to cancel */
    clearButton.addEventListener("click", function (e) {

      /* Prevent default value of form submission */
      e.preventDefault();

      /* Clear the form */
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("street").value = "";
      document.getElementById("city").value = "";
      document.getElementById("province").value = "";
      document.getElementById("postal-code").value = "";
      document.getElementById("phone").value = "";
   });
});