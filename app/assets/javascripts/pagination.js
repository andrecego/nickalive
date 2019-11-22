// slide up animation
// 'n' and 'i' depend on the number of items "per page" on the controller
var n = 0
function imageMoveUp() {  
  // if ($('.image-box').eq([n+i]) == undefined) {return} // prevent errors in console
  console.log(n);
  // $('.image-box').eq([n]).animate({top: '-60px'});
  $('.image-box').eq(n).fadeTo(1000, 0.6);
  n++;
};

// infinite scroll stuff
var loadNextPage = setInterval(function() {
  if ($('#next_link').data('loading')){ return }  // prevent multiple loading
  var wBottom  = $(window).scrollTop() + $(window).height() + 170;
  var elBottom = $('#diamond-grid').offset().top + $('#diamond-grid').height();
    // console.log(wBottom, elBottom)
    if (wBottom > elBottom){
      // console.log('rodando dentro')
      if ($('#next_link')[0] == undefined) {clearInterval(loadNextPage); return} // reset the interval
      $('#next_link')[0].click();
      setTimeout(imageMoveUp, 100)
      $('#next_link').data('loading', true);    
    }
  }, 300);


// window.addEventListener('resize', loadNextPage);
// window.addEventListener('scroll', loadNextPage);
// window.addEventListener('load',  loadNextPage);
// window.addEventListener('load',   imageMoveUp);
// if($('.image-box').eq(0).complete) { console.log('entrouuu') };

// $( window ).on("load", imageMoveUp);
