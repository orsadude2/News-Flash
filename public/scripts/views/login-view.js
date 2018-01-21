'use strict';

var app = app || {};
(module => {

    const loginView = {};
    
    // localStorage.setItem('EMAIL-KEY', JSON.stringify('yo@dude.com'));
    // localStorage.setItem('PASSWORD-KEY', JSON.stringify('password'));

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
    //   $('.findAMovie, .findAMovieLabel, .icon-button, .searchMoviesButton, .logout').fadeIn(700);
    //   $('.userLoginForm').fadeOut(700);
    } else {
      alert('Entered username or password is incorrect.')
    }
  });//END

      };

  module.loginView = loginView
})(app);