var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner__img--slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}

const btnClose = document.querySelector('js-close')
const btnBuys = document.querySelectorAll('js-btn-ticket')
const modal =document.querySelector("modal")
for(var btn of btnBuys ){
  btn.addEventListener('click',function(){
    modal.classList.add('open')
  })
}