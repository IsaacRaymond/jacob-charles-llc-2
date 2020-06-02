

window.onload = function(){
  //targetElement = document.getElementById("example-work");

}

window.onscroll = () => {
  checkPos();
};

function checkPos () {
  if ( (window.scrollY > exampleWork.offsetTop - 15) && (window.scrollY < customerTestimonials.offsetTop)){
    document.getElementById("menu-button-black").style.opacity=1;
    document.getElementById("menu-button-white").style.opacity = 0;
  } else{
    document.getElementById("menu-button-black").style.opacity= 0;
    document.getElementById("menu-button-white").style.opacity = 1;
  }
}
