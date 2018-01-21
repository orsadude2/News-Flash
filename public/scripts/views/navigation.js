'use strict';

// Get the modal
var modal = document.getElementById('myModal');

// var SIGNUP = document.getElementById('signup-link');

// Get the button that opens the modal
var loginLink = document.getElementById("login-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var loginBtn = document.getElementById("loginBtn");

// var signUpBtn = $('#signUpBtn').on('click', (event) => {
//   event.preventDefault();
//   app.signUpView.init();
// });



$(document).ready(function() {
    $('#navbar-toggle').on('click', function() {
        $("#panel").stop().slideToggle();
    });
});


//when user presses LOG OUT
$('#logout-link, .main-link').hide();
$('#logout-link').on('click', (event) => {
  event.preventDefault();
  localStorage.clear();
  $('.main-link, #logout-link').hide();
  $('#login-link, #signup-link').show();
});


// SIGNUP.onclick = () => {
//   $('#signUp').show();
//   $('.feed-wrapper').hide();
//   localStorage.clear();
// }




// When the user clicks on the Login button, call the server and close the modal upon success (TODO: add failure logic)
loginBtn.onclick = function () {
  // TODO: call backend to verify user login
  modal.style.display = "none";
}

// When the user clicks the button, open the modal 
loginLink.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}