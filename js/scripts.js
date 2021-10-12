function menuToggle(){
  var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && window.innerWidth <640) {
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


console.log("Hello World!");
