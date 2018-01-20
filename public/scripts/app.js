'use strict';

var app = app || {};
var Article = 

(module => {

const articlePage = {};

var loadData = function (url, id, anchor) {
  $.getJSON(url, function(data) {
    var template = $(id).html();
    var articles = Handlebars.compile(template)(data);
    $(anchor).append(articles);
  });
};
loadData('data.json', '#feedView-template', '#anchor');

module.articlePage = articlePage;

}) (app);

$(document).ready(function() {
  $('#navbar-toggle').on('click', function() {
    $('#nav-links').slideToggle();
  });
});

// $.ajax({//this authorizes us to access the API
//   url: 'https://newsapi.org/v2/top-headlines?',
//   method: 'GET',
//   headers: {
//     Authorization: 'token 181f3d6ba91f430b93b559021ceb725b'
//   }
// })
//   .then(console.log);


// $.ajax({//this will scope it for ONLY PROJECTS THE OWNER OF THE TOKEN SHOWN
//   url: 'https://newsapi.org/docs/v2-migration',
//   method: 'GET',
//   headers: {
//     Authorization: 'token a128cb87c5e9203de19c35c630dac846c6c5fc9f'
//   }
// })
// .then(console.log)
