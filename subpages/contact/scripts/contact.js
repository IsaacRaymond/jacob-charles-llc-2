document.addEventListener("DOMContentLoaded", function(e) {
  document.body.classList.remove('fade');
});

window.onload = function() {
  $('#header').parallax({imageSrc: 'Resources/contact.jpg', iosFix: true, androidFix: true});
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
  let centerText = document.getElementById("contact-body");
  let footer = document.getElementById("footer");

  if ( (window.scrollY > centerText.offsetTop - 15) && (window.scrollY < footer.offsetTop)){
    document.getElementById("menu-button-black").style.opacity=1;
    document.getElementById("menu-button-white").style.opacity = 0;
  } else{
    document.getElementById("menu-button-black").style.opacity= 0;
    document.getElementById("menu-button-white").style.opacity = 1;
  }
}


/*
function confirmation(){
  console.log("confirmation");
  if ( isItSpam() ){
    displayErrorMessage();
  } else{
    displayConfirmation();
  }
}

function isItSpam(){
  return false;
}

function displayErrorMessage(){

}

function displayConfirmation(){
  $("#confirmation").slideDown(300);
  setInterval(function (){
    $("#confirmation").slideUp(300);
  }, 4000);
  //$("#confirmation").classList.add('show');
}
*/



let httpRequest = new XMLHttpRequest();





function sendEmail(){

  if(!httpRequest){
    alert('Server error:  cannot send email');
    return false;
  }

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  };

  httpRequest.open('POST','http://localhost:3000/');
  httpRequest.send("foo=bar");
}

function test(){
  console.log('hey');
}
