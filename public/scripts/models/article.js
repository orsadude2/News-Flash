'use strict';

// 1) fetchAll (anon vs user)
// 2) login
// 3) sign-up
// 4) sources

// var app = app || {};

// (module => {
//     const __API_URL__ = 'https://dk-rm-nd-Articlelist.herokuapp.com/api/v1/Articles';
//     // const __API_URL__ = 'http://localhost:3000/api/v1/Articles';

//     function Article() {

//     }

//     Article.all = [];

//     Article.fetchAll = () => $.getJSON(__API_URL__);

//     Article.fetchOne = id => $.getJSON(`${__API_URL__}/${id}`);

//     Article.create = Article => $.post(__API_URL__, Article);

//     Article.update = Article => {
//         return $.ajax({
//             url: __API_URL__ + '/' + Article.id,
//             method: 'PUT',
//             data: Article,
//         }).catch(error => console.error(error))

//     }

//     Article.delete = id => {
//         console.log('Articles ' + id)
//         return $.ajax({
//             url: __API_URL__ + '/' + id,
//             method: 'DELETE'
//         }).catch(error => console.error(error))
//     }

//     module.Article = Article;

// })(app);


var app = app || {};

(module => {

  const API_URL = '/sources';


  const Article = {};

  Article.all = [];

  Article.fetchAll = () => {
    console.log('fetchAll', API_URL)
    return $.getJSON(API_URL).then(things => {
      Article.all = things
      console.log('things', things);
      // Article.all.sort((a, b) => {
      //   if (a.name > b.name) {
      //     return 1
      //   } else if (a.name < b.name) {
      //     return -1
      //   } else {
      //     return 0
      //   }
      // })
    }).catch(error => console.error(error));
  }





  module.Article = Article;
})(app)