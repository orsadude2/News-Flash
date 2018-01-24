'use strict';

var app = app || {};
(module => {

  const signUpView = {};

  $('.modalj').hide();
  
  signUpView.init = () => {
    $('#home-link').show();
    var loginList = localStorage.loginData;//starts as an empty array
    if (loginList === undefined || loginList === null) {
      loginList = [];
    } else {
      loginList = JSON.parse(loginList);
    };

    // $('#signup-link').on('click', (event) => {
    //   event.preventDefault();
    //   $('#signUp').show();
    //   $('#inner').hide();
    //   localStorage.clear();
    // });
    //DONT NEED BECAUSE IT"S IN routes.js

    $('#signUpBtn').on('click', (event) => {
      event.preventDefault();
      let userEmail = document.getElementById('signup-email').value
      let userPassword = document.getElementById('signup-password').value
      console.log(userEmail);
      console.log(userPassword);
      if (userEmail && userPassword !== "") {
        localStorage.setItem('EMAIL-KEY', JSON.stringify(userEmail));
        localStorage.setItem('PASSWORD-KEY', JSON.stringify(userPassword));
        $('.feed-wrapper').fadeIn(700);
        $('#signUp, #signup-link, #login-link').hide();
        $('#logout-link, #pref-link').show();
      } else {
        alert('All Fields must be filled out');
      };
    });
  };

  module.signUpView = signUpView;
})(app);