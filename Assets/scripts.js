function createMatt() {
  var matt = document.createElement('img');
  matt.setAttribute('src', "assets/cursor.png");
  matt.classList.add("floating-matt");
  matt.style.left = (Math.random() * 2 - 1) * 300 + "vw";

  var distance = Math.random();
  matt.style.opacity = (1 - distance) * 0.8;
  var rotate = "rotate(" + (Math.random() * 360) + "deg) ";
  var translateZ = "translateZ(-" + distance * 500 + "px) ";
  matt.style.transform = rotate + translateZ;

  document.body.insertBefore(matt, document.body.firstChild);
  setTimeout(function() {
    matt.style.transform = "translateY(calc(1000vh)) " + rotate + translateZ;
  }, 50);
  setTimeout(function() {
    document.body.removeChild(matt);
  }, 18500)
}

setInterval(createMatt, 100);
