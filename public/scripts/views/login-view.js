'use strict';

var app = app || {};

var closeBtn = document.getElementsByClassName("close")[0];
var loginBtn = document.getElementById("loginBtn");
var modal = document.getElementById('login-modal');

(module => {

  const loginView = {};

  loginView.init = () => {
    $('#loginBtn').on('click', (event) => {
      event.preventDefault();
      let userEmail = JSON.parse(localStorage.getItem('EMAIL-KEY'));
      let userPassword = JSON.parse(localStorage.getItem('PASSWORD-KEY'));
      console.log(userEmail);
      console.log(userPassword);
      if ((document.getElementById('login-email').value === userEmail) && 
        (document.getElementById('login-password').value === userPassword)) {
        console.log('Login Success') 
        $('#login-link, #signup-link').hide();
        $('#logout-link, #pref-link').show();
      } else {
        alert('Entered username or password is incorrect.')
      }
    });
  };

  loginBtn.onclick = function () {
    modal.style.display = "none";
  }

  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  // this closes the modal view when the user clicks on the background
  $('#login-modal-outerArea').on('click', function(e) {
    if (e.target !== this) {
      return;
    }
    modal.style.display = "none";
  });

  module.loginView = loginView
}) (app);