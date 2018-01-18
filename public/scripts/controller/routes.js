page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

  page('/error', () => {
    $('.page').hide();
    $('#error-page').show();
  });
  
  page.start();