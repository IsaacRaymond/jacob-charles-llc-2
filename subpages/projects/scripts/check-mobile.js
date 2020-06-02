window.onload = function() {
  var mq = window.matchMedia("(min-width: 699px)");
  if (mq.matches) {} else {
    window.location.replace("./projects-mobile.html");
  }
}
