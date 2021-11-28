//Menu
const hamburger = document.querySelector('header .hamburger');
const nav = document.querySelector('header .navig');
const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navig--active');
}
hamburger.addEventListener('click', handleClick);

//Animation text
var text = document.querySelector(".lefttext");
text.style.transform="translateX(50%)";

//Slider
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//Swaping sites
const xmain = document.querySelector('#site1');
const xjava = document.querySelector('#site2');
const xhtml = document.querySelector('#site3');
const xphp = document.querySelector('#site4');
const xcss = document.querySelector('#site5');
var xsites = document.getElementsByClassName("content");

function swapsite (item){
  if(item=='main'){
    for(var i=0;i<xsites.length;i++){
      xsites[i].style.opacity=0;
      xsites[i].style.zIndex=0;
      setTimeout(function(){xsites[i].style.display= 'none'; }, 200);
    }
    xmain.style.zIndex=1;
    setTimeout(function(){ xmain.style.opacity=1; }, 800);
    xmain.style.display= 'block';
  }
  if(item=='java'){
    for(var i=0;i<xsites.length;i++){
      xsites[i].style.opacity=0;
      xsites[i].style.zIndex=0;
      setTimeout(function(){xsites[i].style.display= 'none'; }, 200);
    }
    xjava.style.zIndex=1;
    setTimeout(function(){ xjava.style.opacity=1; }, 800);
    xjava.style.display= 'block';
  }
  if(item=='html'){
    for(var i=0;i<xsites.length;i++){
      xsites[i].style.opacity=0;
      xsites[i].style.zIndex=0;
      setTimeout(function(){xsites[i].style.display= 'none'; }, 200);
    }
    xhtml.style.zIndex=1;
    setTimeout(function(){ xhtml.style.opacity=1; }, 800);
    xhtml.style.display= 'block';
  }
  if(item=='php'){
    for(var i=0;i<xsites.length;i++){
      xsites[i].style.opacity=0;
      xsites[i].style.zIndex=0;
      setTimeout(function(){xsites[i].style.display= 'none'; }, 200);
    }
    xphp.style.zIndex=1;
    setTimeout(function(){ xphp.style.opacity=1; }, 800);
    xphp.style.display= 'block';
  }
  if(item=='css'){
    for(var i=0;i<xsites.length;i++){
      xsites[i].style.opacity=0;
      xsites[i].style.zIndex=0;
      setTimeout(function(){xsites[i].style.display= 'none'; }, 200);
    }
    xcss.style.zIndex=1;
    setTimeout(function(){ xcss.style.opacity=1; }, 800);
    xcss.style.display= 'block';
  }
}