'use strict';

var app = app || {};

(module => {

  const preferenceView = {};

  preferenceView.init = () => {
    console.log("preference page");
  }

//   function renderArticles() {
//     $('#feedView-template').show()
//     $('#feedView-template').empty()
//     app.Article.all.forEach((articleData, i) => {
//       articleData.id = i;
//       console.log(i);
//       let articleTemplate = template(articleData);
//       $('#anchor').append(articleTemplate);
//       if(articleData.author === null) {
//         // console.log("thing is null", articleTemplate);
//         $(`.feed-wrapper[id='${i}'] > div > div > h2`).addClass('article-author-noshow');
//       }

//     })
  }

  module.preferenceView = preferenceView
})(app)
