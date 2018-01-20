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

  Article.fetchAllArticles = () => {
    return $.getJSON(API_URL).then(articleData => {
      Article.all = articleData
    }).catch(error => console.error(error));
  }

  module.Article = Article;
})(app)