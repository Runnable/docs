// setup
function setupNav(jsNav) {
  var uls = jsNav.getElementsByTagName('ul');
  var lis;
  var lisHeight;
  var liHeight;
  var anchor;

  for (i = 0; i < uls.length; i++) {
    // create events
    anchor = uls[i].firstElementChild.firstElementChild; // get anchors
    anchor.addEventListener('click', toggleList);
    anchor.addEventListener('touchend', toggleList);

    // set height on active lists
    lis = uls[i].getElementsByTagName('li');
    liHeight = lis[0].offsetHeight * 1.4; // allows up to 2 rows per list item
    lisHeight = lis.length * liHeight + 'px';
    if (uls[i].classList.contains('active')) {
      uls[i].style.maxHeight = lisHeight
    }
  }
}

// toggle list
function toggleList(e) {
  var thisTarget = e.target;
  var jsNav = document.getElementsByClassName('js-nav')[0];
  var uls = jsNav.getElementsByTagName('ul');
  var lis;
  var lisHeight;
  var liHeight;

  // get element to make active
  while ((thisTarget = thisTarget.parentNode) && (thisTarget.tagName !== 'UL'));
  lis = thisTarget.getElementsByTagName('li');
  liHeight = lis[0].offsetHeight * 1.4; // allows up to 2 rows per list item
  lisHeight = lis.length * liHeight + 'px';

  // make other elements inactive
  for (i = 0; i < uls.length; i++) {
    uls[i].classList.remove('active');
    uls[i].style.maxHeight = null;
  }

  // make current element active
  thisTarget.style.maxHeight = lisHeight;
  thisTarget.classList.add('active');
}

// events
window.addEventListener('DOMContentLoaded', function(){
  // assume there's only one js-nav
  var jsNav = document.getElementsByClassName('js-nav')[0];

  if (jsNav) {
    setupNav(jsNav);
  }
});
