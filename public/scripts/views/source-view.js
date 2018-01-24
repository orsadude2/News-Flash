'use strict';

var app = app || {};

(module => {

  const preferenceView = {};
  const idList = [];
  const nameList = [];
  const selectedList = [];

  preferenceView.init = () => {
    $('#home-link, #logout-link').show();
    $('#signup-link, #login-link, #pref-link').hide();

    app.Source.fetchAllSources().then(() => {
      // console.log('preferences works', app.Source.all);
      app.Source.all.forEach((source) => {
        // console.log('random-comment: ' + source);
        idList.push(source.id)
        nameList.push(source.name)
        $('.name-list').append(`<input class="source" id=${source.id} type="checkbox">${source.name}</input>`);
      });
      // console.log(idList);
      // console.log(nameList);
      // nameList.forEach((name) => {
      // });
      $('.name-list').show();
    });

    $('.save-button').on('click', () => {
      var checkedList = document.getElementsByClassName('source');
      for (var i = 0; i < checkedList.length; i++) {
        // console.log(checkedList[i].checked);
        if (checkedList[i].checked) {
          selectedList.push(checkedList[i].id);
          // append that id to our saved array
        }
      }

      console.log('we selected the following news outlets: ' + selectedList);
      $('.name-list, .save-button').fadeOut(500);
      // $('#pref-page').append(selectedList)
    });
  };









  module.preferenceView = preferenceView;
})(app);
