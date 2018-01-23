'use strict';

var app = app || {};
(module => {

  const preferenceView = {};

  preferenceView.init = () => {
    app.Source.fetchAllSources().then(() => {
      console.log('preferences works', app.Source.all);
    });
  };









  module.preferenceView = preferenceView;
})(app);