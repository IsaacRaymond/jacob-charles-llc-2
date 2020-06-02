window.onload = function() {
  var mq = window.matchMedia("(min-width: 699px)");
  if (mq.matches) {} else {
    $('#header').parallax({imageSrc: 'Resources/banner-mobile.jpg', iosFix: true, androidFix: true});
  }
}
