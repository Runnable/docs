// setup
function setupNav(jsNav) {
  var uls = jsNav.getElementsByTagName('ul');
  var lis;
  var lisHeight;
  var anchor;

  for (i = 0; i < uls.length; i++) {
    // create events
    anchor = uls[i].firstElementChild.firstElementChild; // get anchors
    anchor.addEventListener('click', toggleList);
    anchor.addEventListener('touchend', toggleList);

    // set height on active lists
    lis = uls[i].getElementsByTagName('li');
    lisHeight = lis.length * 24 + 'px';
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

  // get element to make active
  while ((thisTarget = thisTarget.parentNode) && (thisTarget.tagName !== 'UL'));
  lis = thisTarget.getElementsByTagName('li');
  lisHeight = lis.length * 24 + 'px';

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
