$(document).ready(function(){
  // only run for 'photos#index'
  if ($('meta[name=psj]').attr('controller') == 'photos' && $('meta[name=psj]').attr('action') == 'index') 
  {    
    // slide up animation
    var n = 0
    function imageFadeIn() {  
      $('.image-box').eq(n).fadeTo(600, 0.6);
      n++;
    };

    // infinite scroll stuff
    var loadNextPage = setInterval(function() {
      if ($('#next_link').data('loading')){ return }  // prevent multiple loading
      var wBottom  = $(window).scrollTop() + $(window).height() + 170;
      var elBottom = $('#diamond-grid').offset().top + $('#diamond-grid').height();
        if (wBottom > elBottom){
          setTimeout(imageFadeIn, 50)
          if ($('#next_link')[0] == undefined) {clearInterval(loadNextPage); return} // reset the interval
          $('#next_link')[0].click();
          $('#next_link').data('loading', true);    
        }
      }, 200);
  }
})
