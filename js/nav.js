// setup
function setupNav(jsNav) {
  var uls = jsNav.getElementsByTagName('ul');
  var ulsHeights = [];
  var lis;
  var liHeight;
  var anchor;

  for (i = 0; i < uls.length; i++) {
    lis = uls[i].getElementsByTagName('li');
    liHeight = 0;

    // get height of list
    for (y = 0; y < lis.length; y++) {
      liHeight += lis[y].offsetHeight;
      ulsHeights[i] = liHeight;
    }

    // set height on active list on load
    if (uls[i].classList.contains('active')) {
      uls[i].style.transition = 'none';
      uls[i].style.maxHeight = ulsHeights[i] + 'px';
    }

    // create events on first li
    anchor = uls[i].firstElementChild.firstElementChild;
    anchor.addEventListener('click', function(e){
      toggleList(e, jsNav, uls, ulsHeights);
    });
    anchor.addEventListener('touchend', function(e){
      toggleList(e, jsNav, uls, ulsHeights);
    });
  }
}

// toggle list
function toggleList(e, jsNav, uls, ulsHeights) {
  var thisTarget = e.target;
  var thisIndex;

  // get element to make active
  while ((thisTarget = thisTarget.parentNode) && (thisTarget.tagName !== 'UL'));

  for (i = 0; i < uls.length; i++) {
    // if transition disabled on load, re-enable
    if (uls[i].style.transition) {
      uls[i].style.transition = null;
    }

    // make other elements inactive
    uls[i].classList.remove('active');
    uls[i].style.maxHeight = null;

    // check if list matches active target
    if (uls[i] === thisTarget) {
      thisIndex = i;
    }
  }

  // make current element active
  thisTarget.style.maxHeight = ulsHeights[thisIndex] + 'px';
  thisTarget.classList.add('active');
}

// events
window.addEventListener('DOMContentLoaded', function(){
  // assume there’s only one js-nav
  var jsNav = document.getElementsByClassName('js-nav')[0];

  if (jsNav) {
    setupNav(jsNav);
  }
});
