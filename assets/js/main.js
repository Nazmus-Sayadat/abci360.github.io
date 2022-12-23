
function changeBg(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue < 100){
    navbar.classList.remove('navBgColor');
  } else{
    navbar.classList.add('navBgColor');
  }
}

window.addEventListener('scroll', changeBg);
