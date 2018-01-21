'use strict';

var app = app || {};
(module => {

  const newsListPage = {};
  const template = Handlebars.compile($('#feedView-template').html())

  newsListPage.init = () => {
    app.Article.fetchAllArticles().then(() => {
      renderArticles()
    })
  }

  function renderArticles() {
    $('#feedView-template').show()
    $('#feedView-template').empty()
    app.Article.all.forEach(thing => {
      $('#anchor').append((template(thing)))
    })
  }

  module.newsListPage = newsListPage
})(app)

