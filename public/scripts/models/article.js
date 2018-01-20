'use strict';

// 1) fetchAll (anon vs user)
// 2) login
// 3) sign-up
// 4) sources

var app = app || {};

(module => {

  const API_URL = '/sources';
  const Article = {};
  Article.all = [];

  Article.fetchAll = () => {
    return $.getJSON(API_URL).then(articleData => {
      Article.all = articleData
      
      var template = $('#feedView-template').text();
      for ( var i = 0; i < 20; i++) {
        var article = Handlebars.compile(template)(Article.all[i]);
        $('#anchor').append(article);
        console.log('articles: ', Article.all[i].title);
      }

    }).catch(error => console.error(error));
  }


  module.Article = Article;
})(app)