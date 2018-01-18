'use strict';

$(document).ready(function() {
  console.log('ready!');
});

$.getJSON('data.json', function(json) {
  console.log(json); 
});