document.addEventListener("DOMContentLoaded", function(e) {
  document.body.classList.remove('fade');
});

window.onload = function() {
  $('#header').parallax({imageSrc: 'Resources/homeproducts.png', iosFix: true, androidFix: true});
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

function checkPos () {
  let centerText = document.getElementById("center-text");
  let footer = document.getElementById("footer");

  if ( (window.scrollY > centerText.offsetTop - 15) && (window.scrollY < footer.offsetTop)){
    document.getElementById("menu-button-black").style.opacity=1;
    document.getElementById("menu-button-white").style.opacity = 0;
  } else{
    document.getElementById("menu-button-black").style.opacity= 0;
    document.getElementById("menu-button-white").style.opacity = 1;
  }
}
