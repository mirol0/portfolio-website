function menuToggle(){
  var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && window.innerWidth <640) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }




console.log("Hello World!");
