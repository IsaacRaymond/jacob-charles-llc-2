let exampleWork;
let customerTestimonials;


document.addEventListener("DOMContentLoaded", function(e) {
  console.log('DOMContentLoaded');
  document.body.classList.remove('fade');
});

window.onload = function() {
  exampleWork = document.getElementById("example-work");
  customerTestimonials = document.getElementById("customer-testimonials");

  var mq = window.matchMedia("(min-width: 600px)");
  if (mq.matches) {
    parallax();
  } else {
    staticBackground();
  }


};

/*
$("#menu").mouseover(function(){
  $(".dropdown").slideDown(300);
  console.log('mouseover');
}).mouseleave(function(){
  $(".dropdown").slideUp(300);
  console.log('mouseleave');
});
*/

function parallax (){
  $('#title-section').parallax({imageSrc: 'Resources/index/IMG_3076.jpg', iosFix: true, androidFix: true});
  $('#customer-testimonials').parallax({imageSrc: 'Resources/index/11.jpg', iosFix: true, androidFix: true});
}

function staticBackground(){
  document.getElementById("customer-testimonials").style.backgroundSize = "cover";
  document.getElementById("customer-testimonials").style.backgroundImage="url(Resources/title-image-dark.png)";
  document.getElementById("title-section").style.backgroundImage="url(Resources/other-dark-lowres.jpg)";
  document.getElementById("title-section").style.backgroundSize="cover";
}

function dropDown () {
  let dropdown = document.getElementById("dropdown");
  if (dropdown.classList.contains('show')){
    $(".dropdown").slideUp(300);
    dropdown.classList.remove('show')
  } else {
    $(".dropdown").slideDown(300);
    dropdown.classList.add('show');
  }
}
