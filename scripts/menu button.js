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

window.onscroll = () => {
  checkPos();
};
