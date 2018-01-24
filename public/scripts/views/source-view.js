'use strict';

var app = app || {};

(module => {

  const preferenceView = {};

  preferenceView.init = () => {
    $('#home-link, #logout-link').show();
    $('#signup-link, #login-link, #pref-link').hide();

    app.Source.fetchAllSources().then(() => {
      console.log('preferences works', app.Source.all);
    });
  };









  module.preferenceView = preferenceView;
})(app);
