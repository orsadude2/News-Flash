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
