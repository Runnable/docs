---
layout: null
---
var index = lunr(function() {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts %}
index.add({
  title: {{ post.title | jsonify }},
  category: {{ post.categories.[0] | jsonify }},
  content: {{ post.content | strip_html | jsonify }},
  tags: {{ post.tags | jsonify }},
  id: {{ count }}
});{% assign count = count | plus: 1 %}{% endfor %}

var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "link": {{ site.baseurl | append: post.url | jsonify }},
  "category": {{ post.categories.[0] | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 9 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]

document.addEventListener("DOMContentLoaded", function(e) {
  var searchInput = document.getElementById('search');

  searchInput.addEventListener('keyup', function(e) {
    var resultdiv = document.getElementById('results');
    var sidebardiv = document.getElementById('sidebar');
    var itemList = '';

    function showResults() {
      window.scroll(0,0);
      resultdiv.classList.add('in');
      sidebardiv.classList.add('overflow-y-hidden');
    }

    function hideResults() {
      resultdiv.classList.remove('in');
      sidebardiv.classList.remove('overflow-y-hidden');
    }

    // Get query
    var query = e.target.value;
    // Search for it
    var result = index.search(query);

    if (query.length === 0) {
      hideResults();
    } else {
      showResults()
    }

    // Show results
    while (resultdiv.firstChild) {
      resultdiv.removeChild(resultdiv.firstChild);
    }

    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchItem = '\
        <a href="'+store[ref].link+'" class="grid-block shrink col a result">\
          <span class="post-title text-overflow">'+store[ref].title+'</span>\
          <span class="post-excerpt text-overflow">'+store[ref].excerpt+'</span>\
        </a>';
      if (searchItem) {
        itemList += searchItem;
      }
    }
    resultdiv.innerHTML = itemList;
  });
});
