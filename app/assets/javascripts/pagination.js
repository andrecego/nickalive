// slide up animation
let n = 0
$(document).ready(function() { 
  animate();
});
function animate() {  
  for (let i = 0; i < 8; i++){
    document.getElementsByClassName("image-box")[n+i].style.marginTop = "-60px";
  }
  n += 8;
};

// infinite scroll stuff
let loadNextPage = function(){
  if ($('#next_link').data("loading")){ return }  // prevent multiple loading
  let wBottom  = $(window).scrollTop() + $(window).height();
  let elBottom = $('#diamond-grid').offset().top + $('#diamond-grid').height();
  if (wBottom > elBottom){
    $('#next_link')[0].click();
    setTimeout(animate, 250);
    $('#next_link').data("loading", true);
    
  }
};
window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);