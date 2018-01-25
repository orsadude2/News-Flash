'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => { 
  page('/home');
  $('.save-button').hide();
});

page('/home', () => { 
  app.newsListPage.init();
});

page('/login', () => {
  app.loginView.init();
});

page('/signup', () => {
  event.preventDefault();
  app.signUpView.init();
  $('#signUp').fadeIn(700);
  $('.feed-wrapper').fadeOut(700);
  localStorage.clear();
});

page('/preferences', () => {
  event.preventDefault();
  app.preferenceView.init();
  $('.feed-wrapper, #signUp').fadeOut(700);
  $('.save-button').show();
});

page('/error', () => {
  $('.page').hide();
  $('#error-page').show();
});


page.start();
