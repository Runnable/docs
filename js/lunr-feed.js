---
layout: null
---
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts %}
index.add({
  title: {{post.title | jsonify}},
  category: {{post.categories.[0] | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}

var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify | }},
  "link": {{ site.baseurl | append: post.url | jsonify }},
  "category": {{ post.categories.[0] | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 10 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');
    var overlaydiv = $('#overlay');

    function showResults() {
      window.scroll(0, 0);
      resultdiv.removeClass('lunr-hidden');
      contentdiv.addClass('lunr-hidden');
      overlaydiv.removeClass('lunr-hidden');
    }

    function hideResults() {
      contentdiv.removeClass('lunr-hidden');
      resultdiv.addClass('lunr-hidden');
      overlaydiv.addClass('lunr-hidden');
    }

    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);

    if (query.length === 0) {
      hideResults();
    } else {
      showResults()
    }

    // Show results
    resultdiv.empty();
    resultdiv.prepend('');
    resultdiv.append('');

    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><a href="'+store[ref].link+'" class="a"><div class="result-body"><div class="post-title margin-bottom-xxs">'+store[ref].title+'</div><p class="post-excerpt">'+store[ref].excerpt+'</p></div></a>';
      resultdiv.append(searchitem);
    }
  });
});
