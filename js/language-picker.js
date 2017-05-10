// setup
function setupPicker(pickerButton) {
  var pickerToggle = document.querySelectorAll('[data-picker-toggle]');
  var pickerText = document.querySelectorAll('[data-picker-text]');

  for (y = 0; y < pickerToggle.length; y++) {
    if (pickerToggle[y].getAttribute('data-picker-toggle') === 'false') {
      pickerToggle[y].style.display = 'none';
    }
  }

  for (i = 0; i < pickerButton.length; i++) {
    var thisButton = pickerButton[i];
    thisButton.addEventListener('click',function(e) {
      togglePicker(e, pickerButton, pickerToggle, pickerText);
    });
    thisButton.addEventListener('touchend',function(e) {
      togglePicker(e, pickerButton, pickerToggle, pickerText);
    });
  }
}

function togglePicker(e, pickerButton, pickerToggle, pickerText) {
  var thisLang = e.target.getAttribute('data-picker');
  var thisButton;
  var thisToggle;

  // update button states
  for (y = 0; y < pickerButton.length; y++) {
    thisButton = pickerButton[y];
    if (thisButton.getAttribute('data-picker') !== thisLang) {
      thisButton.classList.remove('active');
    } else {
      thisButton.classList.add('active');
    }
  }

  // update toggled elements
  for (i = 0; i < pickerToggle.length; i++) {
    thisToggle = pickerToggle[i];
    if (thisToggle.getAttribute('data-picker') !== thisLang) {
      thisToggle.style.display = 'none';
    } else {
      thisToggle.style.display = null;
    }
  }

  // update all text
  for (x = 0; x < pickerText.length; x++) {
    pickerText[x].textContent = thisLang;
  }
}

// events
window.addEventListener('DOMContentLoaded', function(){
  var pickerButton = document.querySelectorAll('button[data-picker]');

  if (pickerButton) {
    setupPicker(pickerButton);
  }
});
