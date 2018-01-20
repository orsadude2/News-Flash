'use strict';


page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

  page('/', app.newsListPage.init);
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
    app.adminView.init();
  });

  page('/sign-up', () => {
    app.adminView.init();
  });

  // page('/sources', () => {
  //   app.View.init();
  // });

  page('/error', () => {
    $('.page').hide();
    $('#error-page').show();
  });
  

  page.start();