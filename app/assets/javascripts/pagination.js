// slide up animation
var n = 0
$(document).ready(function() { 
  animate();
});
function animate() {  
  for (var i = 0; i < 8; i++){
    document.getElementsByClassName("image-box")[n+i].style.marginTop = "-60px";
  }
  n += 8;
};

// infinite scroll stuff
var loadNextPage = function(){
  if ($('#next_link').data("loading")){ return }  // prevent multiple loading
  var wBottom  = $(window).scrollTop() + $(window).height();
  var elBottom = $('#diamond-grid').offset().top + $('#diamond-grid').height();
  if (wBottom > elBottom){
    $('#next_link')[0].click();
    setTimeout(animate, 250);
    $('#next_link').data("loading", true);
    
  }
};
window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);
