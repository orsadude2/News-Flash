'use strict';

var app = app || {};
(module => {

  const newsListPage = {};

  const markup = `
            <div class="pages">
                <div>
                    <div>
                        <img src="{{urlToImage}}" alt="" width="">
                    </div>
                    <div class="attribution">
                        <h1>
                            <a href="">{{name}}</a>
                        </h1>
                        <h2>{{title}}</h2>
                        <h3 class="attribution-author"> by {{author}} </h3>
                    </div>
                    <div>
                        {{description}}
                    </div>
                    <div>
                        <div>{{url}}</div>
                    </div>
                </div>
                <hr>
            </div>
    `
  const template = Handlebars.compile(markup)

  function renderThings() {
    $('#news-list-slot').empty()
    app.Article.all.forEach(thing => {
      $('#news-list-slot').append((template(thing)))
    })
  }

  newsListPage.init = () => {

    app.Article.fetchAll().then(() => {
      renderThings()
      $('#news-list-page').show()
    })
  }

  module.newsListPage = newsListPage
})(app)