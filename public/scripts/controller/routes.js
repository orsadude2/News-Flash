'use strict';


page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => { 
  page('/home');
});

page('/home', () => { 
  app.newsListPage.init();
});

// page('/', () => {
//   app.Book.fetchAll().then(books => {
//     app.bookListPage.init(books);
//   })
// })

//   page('/books/:id', (ctx) => {
//     $('.page').hide()

// app.Book.fetchOne(ctx.params.id).then(book => {
//   app.bookDetailPage.init(book);
// });
//   });  

page('/login', () => {
  event.preventDefault();
  app.loginView.init();
});

page('/signup', () => {
  event.preventDefault();
  app.signUpView.init();
  $('#signUp').fadeIn();
  $('.feed-wrapper').fadeOut();
  localStorage.clear();
});

page('/preferences', () => {
  event.preventDefault();
  app.preferenceView.init();
  $('.feed-wrapper, #signUp').fadeOut(700);
});

page('/error', () => {
  $('.page').hide();
  $('#error-page').show();
});

page.start();
