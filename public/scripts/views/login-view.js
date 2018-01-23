'use strict';

var app = app || {};
(module => {

  const loginView = {};

  loginView.init = () => {

    $('#loginBtn').on('click', (event) => {
      event.preventDefault();
      let userEmail = JSON.parse(localStorage.getItem('EMAIL-KEY'));
      let userPassword = JSON.parse(localStorage.getItem('PASSWORD-KEY'));
      console.log(userEmail);
      console.log(userPassword);
      if ((document.getElementById('email2').value === userEmail) && 
        (document.getElementById('password2').value === userPassword)) {
        console.log('Login Success') 
        $('#login-link, #signup-link').hide();
        $('#logout-link, .main-link').show();
      } else {
        alert('Entered username or password is incorrect.')
      }
    });

  };

  module.loginView = loginView
})(app);