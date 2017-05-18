// setup
function setupImgZoom(imgs) {
  imgs.forEach(function (img) {
    img.addEventListener('click', function(){
      toggleZoom(img);
    });
    img.addEventListener('touchend', function(){
      toggleZoom(img);
    });
  })
}

function toggleZoom(img) {
  img.classList.add('zoom');
}

// events
window.addEventListener('DOMContentLoaded', function(){
  var articles = document.getElementsByTagName('article');
  var imgs = [];
  var img;

  for (i = 0; i < articles.length; i++) {
    img = articles[i].getElementsByTagName('img');

    for (y = 0; y < img.length; y++) {
      imgs.push(img[y])
    }
  }

  if (imgs) {
    setupImgZoom(imgs);
  }
});
