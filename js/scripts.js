console.log("Oh Hey! Welcome to my porfolio. I'm thrilled you're here!");
function menuToggle(){
  var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
$(function(){
  $.scrollUp();
});
$(function() {

    // Default
    jQuery.scrollSpeed(100, 800);

    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');

});
