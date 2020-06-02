let testimonials = [
  ["He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.  He got me pregnant.", "- Gia Charles"],
  ["He never returns my calls anymore.  I guess he's busy", "- Isaac Raymond"],
  ["I had him build me a home, but what's the point?  We're three, maybe five years from nuclear armageddon", "- Debbie Downer"],
  ["filler", "filler"]
];

let index = 0;


function rightArrow(){
  if(index === testimonials.length-1){
    index = 0;
  }else{
    index++;
  }
  custTest = document.getElementById("customer-testimonials-sliding-text");
  setTimeout(function(){
    custTest.innerHTML = "<p>"+testimonials[index][0]+"</p>"+"<p>"+testimonials[index][1]+"</p>";
    custTest.style.opacity = 1;
  }, 500);
  custTest.style.opacity = 0;
}

function leftArrow(){
  if(index===0){
    index = testimonials.length-1;
  } else {
    index --;
  }
    custTest = document.getElementById("customer-testimonials-sliding-text");
    custTest.style.opacity = 0;
    setTimeout(function(){
      custTest.innerHTML = "<p>"+testimonials[index][0]+"</p>"+"<p>"+testimonials[index][1]+"</p>";
      custTest.style.opacity = 1;
    }, 500);
}

function getNewTestimonial(){

}
